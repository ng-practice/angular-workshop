describe('Visiting the start page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the header "Books"', () => {
    cy.get('.title').contains(/books/i);
  });

  it('should redirect to books list', () => {
    cy.url().should('contain', 'books');
  });
});
