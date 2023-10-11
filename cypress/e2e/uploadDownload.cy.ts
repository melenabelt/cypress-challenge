import UploadFilePage from "../pages/uploadFilePage";
import DownloadPage from "../pages/downloadPage";

const uploadFilePage = new UploadFilePage();
const downloadPage = new DownloadPage();

const fileUploaderBaseUrl = Cypress.env("fileUploaderUrl");
const demoqaBaseUrl = Cypress.env("demoqaUrl");

describe("File Uploader", () => {
  beforeEach(() => {
    cy.visit(fileUploaderBaseUrl + "upload");
  });

  it("Validate File Is Uploaded Succesfully", () => {
    uploadFilePage.validateFileIsUploadedSuccesfully();
  });
});

describe("Download file", () => {
  beforeEach(() => {
    cy.visit(demoqaBaseUrl + "upload-download");
  });

  it("Validate file is downloaded succesfully", () => {
    downloadPage.validateFileIsDownloadedSuccesfully();
  });

  it("Validate downloaded file exists on downloads folder", () => {
    downloadPage.validateDownloadedFileExistsOnFolder();
  });
});
