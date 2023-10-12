import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      config.chromeWebSecurity = false;
    },
    env: {
      demoblazeUrl: "https://www.demoblaze.com/",
      demoqaUrl: "https://demoqa.com/",
      fileUploaderUrl: "https://the-internet.herokuapp.com/",
      w3schoolUrl: "https://www.w3schools.com/",
    },
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,

    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quiet: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
  },
});
