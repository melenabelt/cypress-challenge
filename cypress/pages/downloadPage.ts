import { uploadDownloadLocators } from "../support/demoqaLocators";

const path = require("path");

class DownloadPage {
  constructor() {}

  validateFileIsDownloadedSuccesfully() {
    cy.get(uploadDownloadLocators.downloadButton).click();
  }

  validateDownloadedFileExistsOnFolder() {
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder, "sampleFile.jpeg")).should("exist");
  }
}

export default DownloadPage;
