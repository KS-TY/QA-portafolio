# QA Portfolio — Manual, API, Automation and Performance Testing

[![CI status](https://github.com/KS-TY/QA-portafolio/actions/workflows/ci.yml/badge.svg)](https://github.com/KS-TY/QA-portafolio/actions/workflows/ci.yml)

## Short description

This repository contains a QA portfolio with practical evidence of:

* Manual Testing
* API Testing (Postman)
* Test Automation (Cypress)
* **Performance Testing (k6)**

The purpose is to showcase test design, execution, bug reporting, automation, and system behavior under different load conditions.

---

## About me

Systems Engineer focused on Quality Assurance and Software Testing.
Experience in functional testing, API validation, automation, and performance testing to ensure system reliability and scalability.

---

## Project structure

* `manual-testing/`

  * `test-plan/` — Test plan (SauceDemo)
  * `test-cases/` — Manual test cases
  * `test-execution/` — Execution results
  * `bug-reports/` — Bug reports with evidence

* `api-testing/`

  * `postman/` — Postman collections
  * `reports/` — API reports

* `cypress/` — End-to-end automation

  * `e2e/`, `fixtures/`, `support/`

* `performance-testing/`

  * `k6/`

    * `basic-load-test.js`
    * `stress-test.js`
    * `spike-test.js`
    * `soak-test.js`
    * `config.js`
    * `thresholds.js`

* `cypress.config.js`

---

## Main sections

### 1. Manual testing

* Based on SauceDemo web application
* Includes:

  * Test plan
  * Test cases
  * Execution results
  * Bug reports with evidence

---

### 2. API testing

* Uses FakeStore API with Postman
* Scenarios:

  * Get products
  * Get product by ID
  * Login
* Validations:

  * Status codes
  * JSON structure

---

### 3. Automation

* Framework: Cypress
* Scenarios:

  * Successful login
  * Invalid credentials
* Focus on end-to-end flows

---

### 4. Performance testing (k6)

Performance tests were executed against the FakeStore API to evaluate system behavior under different load conditions.

#### Test types

* **Load Test**

  * Simulates normal user traffic
  * Result: Stable response times (~200–250ms), 0% errors

* **Stress Test**

  * Gradually increases load
  * Result: System remains stable up to ~400 virtual users

* **Spike Test**

  * Sudden traffic peaks
  * Result: System handles spikes without failures

* **Soak Test**

  * Sustained load over time
  * Result: No performance degradation detected

---

#### Breaking point analysis

Under extreme load conditions (1000–2000 virtual users):

* Request timeouts observed
* Connections closed by server
* Increased latency

**Conclusion:**
The system is stable under normal and moderate load but does not scale efficiently under extreme concurrency.

---

#### Metrics evaluated

* Response time (p95 < 1s)
* Error rate (< 5%)
* Throughput (requests per second)

---

## How to run tests

### Cypress (automation)

```bash
npm install
npx cypress open
```

### k6 (performance)

```bash
k6 run performance-testing/k6/basic-load-test.js
k6 run performance-testing/k6/stress-test.js
k6 run performance-testing/k6/spike-test.js
k6 run performance-testing/k6/soak-test.js
```

> Each performance test is executed independently to ensure accurate and reliable metrics.

---

## Tools used

* Manual testing
* Postman
* Cypress
* k6
* JavaScript
* Git & GitHub

---

## Portfolio purpose

Demonstrate practical skills in:

* Test design and execution
* Bug reporting
* API validation
* Test automation
* **Performance and scalability analysis**

---

## Contact

juancasl2015@gmail.com
Open to feedback, improvements, and collaboration opportunities.
