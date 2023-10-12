import IframePage from "../pages/iframePage";

const iframePage = new IframePage();

describe(
  "iFrames Validation",
  {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
  () => {
    beforeEach(() => {
      iframePage.visit();
    });

    it("Validate iframe main title", () => {
      iframePage.getFrameTitle();
    });

    it("Validate iframe css main title", () => {
      iframePage.goToCssPageInFrame();
    });
  }
);
