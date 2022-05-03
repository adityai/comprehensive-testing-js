/// <reference types="cypress" />

describe('Exercise', () => {
  it('loads', () => {
    /** Your code below */
    //1. Use cy.visit('/') to go to the app url
    cy.visit("/");
    //2. Use cy.get('.App-link').should('be.visible') to assert valid state
    cy.get('.App-link').should('be.visible');
    /** Your code above */
  });

  it('link goes to ultimateqa', () => {
    /** Your code below */
    // 1. Use cy.visit('/') to go to the app url
    cy.visit('/');
    // 2. cy.get('').should('have.attr', 'href').and('equal', 'WHAT?')
    cy.get('.App-link').should('have.attr', 'href').and('equal', 'https://www.ultimateqa.com');
    /** Your code above */
  });

  it('should open link in new tab', () => {
    /** Your code below */
    // 1. Cmon, you know how to open the url now :)-
    cy.visit('/');
    // 2. cy.get('').should('have.attr', 'WHAT').and('equal', 'WHAT VALUE')
    cy.get('.App-link').should('have.attr', 'target').and('equal', '_blank');
    // cy.get('.App-link').click();
    // cy.window().then(win => {
    //   cy.stub(win, 'open').as('open');
    // });
    /** Your code above */
  });
});
