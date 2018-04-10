describe('Creating a new book', () => {
  const isbn = '093-213123-1231-2';

  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('.mat-card').as('books');
  });

  it('should increase the count of the book items by one', () => {
    let booksCountBefore = 0;

    cy
      .get('@books')
      .then(books => (booksCountBefore = books.length))
      .then(_ => click('.mat-raised-button', /create/i))
      .then(_ => fillForm(isbn))
      .then(_ => click('.mat-raised-button', /save/i))
      .then(_ => cy.go('back'))
      .then(_ => cy.get('@books'))
      .then(books => expect(books.length).eq(booksCountBefore + 1));
  });

  afterEach(() => cy.request('DELETE', `http://localhost:4730/books/${isbn}`));
});

function fillForm(isbn: string) {
  return cy
    .get(formControl('isbn'))
    .type(isbn)
    .then(() => cy.get(formControl('title')).type('Angular 6-rc.3'))
    .then(() => cy.get(formControl('author')).type('Misko Hevery'))
    .then(() => cy.get(formControl('abstract')).type('useful information.'));

  function formControl(name: string) {
    return `[formcontrolname="${name}"]`;
  }
}

function click(selector: string, textContent: RegExp) {
  return cy
    .get(selector)
    .contains(textContent)
    .click();
}
