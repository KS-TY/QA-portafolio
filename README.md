# QA Portfolio — Manual, API and Automation Testing

Short description
-----------------

This repository contains a QA portfolio with practical evidence of Manual Testing, API Testing (Postman) and Test Automation (Cypress). The purpose is to showcase test plan design, test case creation, execution, bug reporting, and automation of end-to-end scenarios on real applications and public APIs.

About me
--------

Systems Engineering student interested in Quality Assurance and Software Testing. I work on functional testing, API testing and automation to help ensure software stability and quality.

Project structure
-----------------

- `manual-testing/`
	- `test-plan/` — Test plan (SauceDemo)
	- `test-cases/` — Manual test cases
	- `test-execution/` — Execution results
	- `bug-reports/` — Bug reports with evidence

- `api-testing/`
	- `postman/` — Postman collections and API tests
	- `reports/` — API test reports

- `cypress/` — End-to-end tests with Cypress
	- `e2e/` — Test specs
	- `fixtures/`, `support/` — Cypress resources

- `cypress.config.js` — Cypress configuration

Main sections
-------------

1. Manual testing
	 - Based on the SauceDemo web application.
	 - Includes test plan, detailed test cases, execution results and bug reports with screenshots.

2. API testing
	 - Uses the public FakeStore API and Postman collection.
	 - Tests include: list products, get product by ID, login and token validation.
	 - Common checks: status codes and JSON structure.

3. Automation
	 - Framework: Cypress for end-to-end automation.
	 - Included scenarios: successful login, error handling for invalid credentials.
	 - Additional scenarios can be added as the project grows.

How to run automation tests
---------------------------

1. Install dependencies:

```bash
npm install
```

2. Open Cypress (interactive mode):

```bash
npx cypress open
```



Tools used
----------

- Manual testing
- Postman (API testing)
- Cypress (automation)
- JavaScript
- Git and GitHub

Portfolio purpose
-----------------

Show practical skills in:

- Designing test plans and test cases
- Executing and documenting tests
- Reporting bugs with evidence
- Validating APIs
- Automating end-to-end flows

Contact
-------

If you want suggestions, improvements or additional automated scenarios, open an issue or send a message.

--
Updated to improve clarity and structure (English version).
--
Actualizado para mejorar legibilidad y estructura.