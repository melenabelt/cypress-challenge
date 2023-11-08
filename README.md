# Cypress Project

Welcome to your Cypress project! This project is configured to run Cypress tests and includes various scripts to help you manage and report your tests effectively.

## Prerequisites

Before you get started, make sure you have Node.js and NPM installed on your system. You can download and install them from [Node.js](https://nodejs.org/).

## Scripts

This project includes several useful NPM scripts to help you run, test, lint, and generate reports for your Cypress tests. You can use these scripts as follows:

## Setup

1. Clone this repository to your system:

   ```shell
   git clone https://github.com/melenabelt/cypress-challenge/
   ```

2. Navigate to the project directory:

   ```shell
   cd DIRECTORY_NAME
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

## Run Cypress tests

   ```shell
   npm test
   ```
- Open the Cypress test runner:
  
  ```shell
  npm run test:open
  ```
- Lint your Cypress test files:
  
  ```shell
  npm run lint
  ```
- Before running tests, clean up previous test reports:

  ```shell
  npm run pretest
  ```
- Combine Mocha reports into a single report file:

  ```shell
  npm run combine:reports
  ```
- Generate test reports using the merged report file:
  
  ```shell
  npm run generate:reports
  ```
- After running tests, combine and generate reports:
  
  ```shell
  npm run posttest
  ```
  
These scripts make it easy to manage your Cypress tests, run them, and generate reports efficiently.

## Configuration

If you need to configure Cypress, you can do so in your Cypress configuration file (usually cypress.json). Make sure to adjust the configuration to suit your project's requirements.

## License

[MIT](https://choosealicense.com/licenses/mit/)
