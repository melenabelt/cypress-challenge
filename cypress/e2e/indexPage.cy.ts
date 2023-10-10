import IndexPage from "../pages/indexPage";
import "../support/loginBeforeEach"

const indexPage = new IndexPage();

describe("Login", () => {

    it("Validate username is correct", () => {
        indexPage.validateUsernameAfterLogin();
    }); 
});

describe("Contact", () => {
    it("Validate a contact message is sent succesfully", () => {
        indexPage.validateContactMsgIsSent();
    })
})