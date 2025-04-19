
# QA Code Quiz - Login Functionality Tests

This repository contains Cypress tests to verify the login functionality of the "QA Code Quiz" platform, covering both positive and negative test scenarios.

## Test Scenarios

### 1. UI Checks
- Main Site Title: Verifies the page title.
- Username & Password Fields: Ensures the input fields are visible with correct placeholders.
- Login Button: Checks if the login button is visible.
- User Instruction Message: Confirms the presence of instructions for users without an account.

### 2. Visual Feedback
- Username & Password Border Colors: Verifies border color changes on input.

### 3. Negative Scenario
- Incorrect Credentials: Tests error message for invalid credentials.

### 4. Positive Scenario
- Successful Login: Verifies login and dashboard display.
- Logout: Ensures logout functionality works.

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/) to run Cypress.

### Install Dependencies
1. Clone the repository:
   ```bash
   git clone <https://github.com/Razib-R75/qa.code-quiz>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests
1. For interactive testing:
   ```bash
   npx cypress open
   ```

2. For headless testing:
   ```bash
   npx cypress run
   ```

## File Structure
- `cypress/`: Test files and configurations.
- `README.md`: This file.
- `package.json`: Project dependencies and scripts.

## Test Case PDF
You can download the detailed test cases file
