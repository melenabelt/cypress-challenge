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
      cy.wrap(null) // Usamos cy.wrap(null) como un marcador de posición
        .then(() => {
          const maxTry = 5; 
          let tries = 0;

          function performActionAndVerify() {
            getBody().find(iframe.mainTitle).should("contain", "HTML Tutorial");
          }

          // Cycle to retry in case action fails
          function retry() {
            tries++; 
            if (tries <= maxTry) {
              // Perform action in every try
              performActionAndVerify();
            }
          }

          // Perform initial action
          performActionAndVerify();

          // We use a cycle to retry in case it's necessary
          while (tries < maxTry) {
            retry();
          }
        });
    });
  }

  goToCssPageInFrame() {
    cy.enter(iframe.iframe).then((getBody) => {
      cy.wrap(null) 
        .then(() => {
          const maxTry = 3; 
          let tries = 0;

          function performActionAndVerify() {
            getBody().find(iframe.cssNavbarItem).click();
            getBody()
              .find(iframe.cssNavbarItem)
              .should("have.attr", "title")
              .and("include", "CSS Tutorial");
          }


          function retry() {
            tries++; 
            if (tries <= maxTry) {
              performActionAndVerify();
            }
          }

          performActionAndVerify();

          while (tries < maxTry) {
            retry();
          }
        });
    });
  }
}

export default IframePage;
