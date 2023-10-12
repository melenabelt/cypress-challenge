import { iframe } from "../support/w3schoolLocators";

const w3schoolUrl = Cypress.env("w3schoolUrl");

class IframePage {
  constructor() {}

  visit() {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit(w3schoolUrl + "html/html_iframe.asp");
    cy.frameLoaded(iframe.iframe);
  }

  getFrameTitle() {
    cy.enter(iframe.iframe).then((getBody) => {
      getBody().find(iframe.mainTitle).should("contain", "HTML Tutorial");
    });
  }

  goToCssPageInFrame() {
    cy.enter(iframe.iframe).then((getBody) => {
      getBody().find(iframe.cssNavbarItem).click();
      getBody()
        .find(iframe.cssNavbarItem)
        .should("have.attr", "title")
        .and("include", "CSS Tutorial");
    });
  }
}

export default IframePage;
