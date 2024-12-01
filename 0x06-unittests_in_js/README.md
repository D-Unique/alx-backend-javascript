# 0x06. Unit Tests in JavaScript

## Description
This project focuses on writing unit tests in JavaScript using the Mocha testing framework and Chai assertion library. The goal is to understand the importance of testing, how to write effective unit tests, and how to integrate testing into the development workflow.

## Learning Objectives
- Understand the importance of unit testing
- Learn how to set up a testing environment with Mocha and Chai
- Write unit tests for JavaScript functions
- Use different types of assertions provided by Chai
- Run tests and interpret the results

## Requirements
- Node.js installed
- npm (Node Package Manager) installed

## Setup
1. Install Mocha and Chai:
    ```bash
    npm install --save-dev mocha chai
    ```

2. Create a `test` directory to store your test files:
    ```bash
    mkdir test
    ```

3. Add a test script to your `package.json`:
    ```json
    "scripts": {
        "test": "mocha"
    }
    ```

## Writing Tests
- Create a test file in the `test` directory, e.g., `test/example.test.js`.
- Import the function to be tested and the Chai assertion library.
- Write test cases using `describe` and `it` blocks.

Example:
```javascript
const { expect } = require('chai');
const exampleFunction = require('../exampleFunction');

describe('exampleFunction', () => {
    it('should return the correct value', () => {
        const result = exampleFunction(2, 3);
        expect(result).to.equal(5);
    });
});
```

## Running Tests
- Run the tests using the following command:
    ```bash
    npm test
    ```

## Resources
- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)

## Author
Emmanuel
