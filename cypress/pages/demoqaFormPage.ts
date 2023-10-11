import { formLocators } from "../support/demoqaLocators";

let modalTitleText: string;

class DemoQaFormPage {
  constructor() {}

  fillForm() {
    return cy.fixture("demoqaUserDataForm.json").then((userdata) => {
      cy.get(formLocators.firstNameInput).type(userdata.firstname, {
        force: true,
      });
      cy.get(formLocators.lastNameInput).type(userdata.lastname, {
        force: true,
      });
      cy.get(formLocators.emailInput).type(userdata.email, { force: true });
      cy.get(formLocators.genderRadio)
        .contains(userdata.gender)
        .prev('input[type="radio"]')
        .check({ force: true });
      cy.get(formLocators.mobileInput).type(userdata.mobile, { force: true });


      const dateParts = userdata.dateofbirth.split(' ');
      const month = dateParts[1];
      const year = dateParts[2];
      const day = dateParts[0];
      
      cy.get(formLocators.dateOfBirthDateContainer).click()
      cy.get(formLocators.dateofBirthDateMonthSel).select(month)
      cy.get(formLocators.dateofBirthDateYearSel).select(year)
      cy.get(formLocators.dateofBirthDateDayList).contains(day).click();


      // Select every specified hobby
      userdata.hobbies.forEach((hobby: string) => {
        cy.get(formLocators.hobbiesCheckbox)
          .contains(hobby)
          .prev('input[type="checkbox"]')
          .check({ force: true });
      });

      cy.get(formLocators.currentAddressInput).type(userdata.currentaddress, {
        force: true,
      });

      cy.get(formLocators.submitButton).click({ force: true });
    });
  }

  validateTitleAfterFillingForm(){
    cy.get(formLocators.formSentModalTitle).should('contain', "Thanks for submitting the form");
  }
}

export default DemoQaFormPage;
