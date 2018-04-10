describe('Visiting the start page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('.title').as('title');
  });

  it('should display the header "Books"', () => {
    cy.get('@title').contains(/books/i);
  });

  it('should only have one heading', () => {
    cy
      .get('@title')
      .then(found => found.length)
      .then(count => expect(count).to.eq(1));
  });

  it('should redirect to books list', () => {
    cy.url().should('contain', 'books');
  });
});
