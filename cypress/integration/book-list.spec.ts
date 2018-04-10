describe('Visiting the start page', () => {
  context('life data', () => {
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

  context('stubbed xhr', () => {
    beforeEach(() => {
      cy.server();
      cy.route('GET', 'http://localhost:4730/books', 'fixture:books.json');
      cy.visit('http://localhost:4200');
    });

    it('should display 2 mocked books', () => {
      cy.get('.mat-card').should('have.length', 2);
    });
  });
});
