import DemoQaFormPage from "../pages/demoqaFormPage";

const demoQaFormPage = new DemoQaFormPage();

describe("Form", () => {

    beforeEach(() => {
        cy.visit(Cypress.env("demoqaUrl") + "automation-practice-form");
    });

    it("Validate form is filled succesfully", () => {
        demoQaFormPage.fillForm().then(() => {
            demoQaFormPage.validateTitleAfterFillingForm();
          });
    })

})

