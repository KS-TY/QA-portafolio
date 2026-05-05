# QA Portfolio — Manual, API, Automation, Performance and Data Testing

[![CI status](https://github.com/KS-TY/QA-portafolio/actions/workflows/ci.yml/badge.svg)](https://github.com/KS-TY/QA-portafolio/actions/workflows/ci.yml)

## Short description

This repository showcases end-to-end Quality Assurance practices across multiple layers of a system:

* Functional testing (UI)
* API validation
* Test automation
* Performance testing
* Data validation using SQL

The focus is not only on executing tests, but on identifying real issues, understanding their impact, and validating system reliability under different conditions.

I approach testing from multiple layers: UI, API, performance, and data validation.

---

## About me

Systems Engineer focused on Quality Assurance and Software Testing.
Experience in functional testing, API validation, automation, and performance testing to ensure system reliability and scalability.

---

## Key Findings

During testing and analysis, several relevant issues and observations were identified:

* API behavior remains stable under moderate load but degrades under high concurrency (1000+ users)
* Performance bottlenecks appear as increased latency and connection failures
* Edge cases in API responses highlight the need for stronger validation
* Data inconsistencies can affect reporting accuracy and business decisions
* Referential integrity issues and invalid values demonstrate the importance of validating data, not only system behavior

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

* `data-testing/`

  * `dataset/` — CSV files (customers, orders)
  * `sql/`

    * `data_quality_checks.sql`
    * `analysis.sql`

* `cypress.config.js`

---

## Main sections

### 1. Manual testing

Based on SauceDemo web application.

Includes:

* Test plan
* Test cases
* Execution results
* Bug reports with evidence

---

### 2. API testing

Uses FakeStore API with Postman.

Scenarios:

* Get products
* Get product by ID
* Login

Validations:

* Status codes
* JSON structure

---

### 3. Automation

Framework: Cypress

Scenarios:

* Successful login
* Invalid credentials

Focus on end-to-end flows and validation of critical user paths.

---

### 4. Performance testing (k6)

Performance tests were executed against the FakeStore API to evaluate system behavior under different load conditions.

#### Test types

Load Test
Simulates normal user traffic
Result: Stable response times (~200–250ms), 0% errors

Stress Test
Gradually increases load
Result: System remains stable up to ~400 virtual users

Spike Test
Sudden traffic peaks
Result: System handles spikes without failures

Soak Test
Sustained load over time
Result: No performance degradation detected

---

#### Breaking point analysis

Under extreme load conditions (1000–2000 virtual users):

* Request timeouts observed
* Connections closed by server
* Increased latency

Conclusion:
The system is stable under normal and moderate load but does not scale efficiently under extreme concurrency.

---

#### Metrics evaluated

* Response time (p95 < 1s)
* Error rate (< 5%)
* Throughput (requests per second)

---

### 5. Data Testing & Analysis

This section extends QA practices into the data layer using SQL.

The objective is to validate data integrity and ensure that system outputs are reliable for analysis and decision-making.

Key validations performed:

* Detection of duplicate or inconsistent records
* Identification of broken relationships between entities (orders without customers)
* Validation of financial data (negative or zero values)
* Temporal consistency checks (orders created before customers)
* Standardization issues in categorical data (e.g., city naming)

Additionally, analysis was performed to understand:

* Customer activity levels
* Segmentation based on number of orders
* Top-performing customers by city
* Customers above average engagement

This demonstrates the ability to validate not only application behavior but also the correctness of underlying data.

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

Each performance test is executed independently to ensure accurate and reliable metrics.

---

## Tools used

* Manual testing
* Postman
* Cypress
* k6
* SQL (PostgreSQL)
* Docker
* JavaScript
* Git & GitHub

---

## Portfolio purpose

Demonstrate the ability to:

* Design and execute test cases
* Identify and report bugs with clear impact
* Validate APIs and system behavior
* Automate end-to-end scenarios
* Analyze system performance under load
* Validate data integrity and reliability using SQL

The goal is to approach QA from a complete system perspective: UI, API, performance, and data.

---

## Contact

[juancasl2015@gmail.com]
Open to feedback, improvements, and collaboration opportunities.
