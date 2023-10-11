import DemoQaFormPage from "../pages/demoqaFormPage";

const demoQaFormPage = new DemoQaFormPage();

const demoqaBaseUrl = Cypress.env("demoqaUrl")

describe("Form", () => {

    beforeEach(() => {
        cy.visit(demoqaBaseUrl + "automation-practice-form");
    });

    it("Validate form is filled succesfully", () => {
        demoQaFormPage.fillForm().then(() => {
            demoQaFormPage.validateTitleAfterFillingForm();
          });
    })

})

