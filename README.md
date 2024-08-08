# Web browser automation project for Symphony.is website

\*\*Version 1.0.0

This repo consists of example of a suite of test cases regarding checks and assertions on https://symphony.is/ website. It tries to implement several best practices according to Cypress documentation about organizing tests, selecting elements, as well as setting up and controlling state of the application.

Page Object Model (POM) pattern is used to create an object repository for storing all web elements locators per page. Tests included in this repo and any new tests would generally need to cover 3 phases:

1. Set up the application state (if applicable)

2. Take an action.

3. Make an assertion about the resulting application state.

## :gear: Setup

1. Clone the repo:

   ```
   git clone https://github.com/aarsenovski/symphony-assignment
   ```

2. Install project dependencies:
   ```
   npm install
   ```

---

## :bulb: Information

#### :test_tube: Configuration:

:file_folder: Tests are located in `cypress/e2e` folder

:file_folder: Fixtures (test data) are located in `cypress/fixtures` folder

:file_folder: Custom commands are located in `cypress/support` folder

:file_folder: Selectors (Page object patterns) are located in `cypress/pages` folder

:page_facing_up: Main config file where default behavior of Cypress can be modified. -`cypress.config.js` file

#### :test_tube: Run tests:

- run tests in headless mode:

```
npm run cypress-h
```

- run tests within Cypress Launchpad:

```
npm run cypress
```

- see available options and help:

```
npx cypress --help
```

## Contributor

- Andrej Arsenovski - <andrejarsenovski@gmail.com> - 2024

---

## License and copyright

```

```
