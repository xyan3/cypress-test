import { AngularE2eTestingPage } from '../support/app.po';

describe('hero', () => {
  let page: AngularE2eTestingPage;

  beforeEach(() => {
    page = new AngularE2eTestingPage();
    cy.visit('/');
  });

  it('should open e2e test page and display button', () => {
    // Function helper example, see `../support/app.po.ts` file
    page.title().should('eq','Hero');
    page.button().should('be.visible');
  });

  it('should open e2e test page and display button', () => {
    // Function helper example, see `../support/app.po.ts` file
    page.button().click().then(() => {
      page.textElement().should('have.text', 'You are my hero!')
    });
  });
});
