export const getGreeting = () => cy.get('h1');

export class AngularE2eTestingPage {
  navigateTo() {
    return cy.get('/');
  }

  title() {
    return cy.title();
  }

  button() {
    return cy.contains('Click me!');
  }

  textElement() {
    return cy.get('h2');
  }
}
