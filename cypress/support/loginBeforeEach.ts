import IndexPage from "../pages/indexPage";

const indexPage = new IndexPage();

beforeEach(() => {
    cy.visit("index.html");
    indexPage.validateLoginModal();
    indexPage.validateLoginSucceeded();
});