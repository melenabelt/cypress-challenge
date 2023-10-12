import IndexPage from "../pages/indexPage";

const indexPage = new IndexPage();
const demoblazeUrl = Cypress.env("demoblazeUrl")

beforeEach(() => {
  cy.visit(demoblazeUrl + "index.html");
  indexPage.validateLoginModal();
  indexPage.validateLoginSucceeded();
});
