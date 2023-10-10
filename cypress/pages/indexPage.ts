import {loginModalLocators, indexPageLocators} from "../support/locators";


class IndexPage{
    constructor() {
    }

    validateLoginModal(){
        cy.get(indexPageLocators.loginButton).click()
        cy.get(loginModalLocators.loginLabel).should("be.visible")
    }

    validateLoginSucceeded(){
        cy.fixture('userDataLogin.json').then((userdata) => {
            cy.get(loginModalLocators.usernameInput).type(userdata.username, {force: true});
            cy.get(loginModalLocators.passwordInput).type(userdata.password, {force: true});
            cy.get(loginModalLocators.loginButton).click();
            cy.get(indexPageLocators.logOutLabel).should("be.visible");
        })
    }

    validateUsernameAfterLogin(){
        cy.fixture('userDataLogin.json').then((userdata) => {
            cy.get(indexPageLocators.usernameLabel).contains(userdata.username);
        }) 
    }

    validateContactMsgIsSent(){
        cy.get(indexPageLocators.generalNavLink).contains("Contact").click()

        cy.fixture('dataContact.json').then((data) => {
            cy.get(indexPageLocators.contactEmailInput).type(data.contactEmail, {force: true});
            cy.get(indexPageLocators.contactNameInput).type(data.contactName, {force: true});
            cy.get(indexPageLocators.messageInput).type(data.message, {force: true});
        })

        cy.get(indexPageLocators.sendMsgButton).contains("Send message").click()

        cy.on("window:alert", (message) => {
            expect(message).to.include("Thanks for the message"); 
        });
    }


}

export default IndexPage;