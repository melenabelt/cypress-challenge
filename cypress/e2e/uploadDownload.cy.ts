import UploadFilePage from "../pages/uploadFilePage";

const uploadFilePage = new UploadFilePage();

const fileUploaderBaseUrl = Cypress.env("fileUploaderUrl")

describe("File Uploader", () => {
    
    beforeEach(() => {
        cy.visit(fileUploaderBaseUrl + "upload")
    })

    it("Validate File Is Uploaded Succesfully", () => {
        uploadFilePage.validateFileIsUploadedSuccesfully();

    })

})

