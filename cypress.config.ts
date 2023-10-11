import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.demoblaze.com/",
    env: {
      demoqaUrl: "https://demoqa.com/",
      fileUploaderUrl: "https://the-internet.herokuapp.com/",
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
