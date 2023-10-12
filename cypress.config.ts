import { defineConfig } from "cypress";

module.exports = defineConfig({
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 3,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 2
  },
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
    defaultCommandTimeout: 40000,
    pageLoadTimeout: 40000,

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
