# API Testing Project — Fake Store API

## Description
This project validates core endpoints of the Fake Store API using Postman.  
The goal is to ensure correct responses, status codes, and authentication behavior.

## Base URL
https://fakestoreapi.com

## Endpoints Tested

| ID     | Method | Endpoint        | Description                  |
|--------|--------|------------------|------------------------------|
| API-01 | GET    | /products        | Get all products            |
| API-02 | GET    | /products/1      | Get product by ID           |
| API-03 | POST   | /auth/login      | Login with valid credentials|

## Test Validations

- Status code validation (200 / 201)
- Response format is JSON
- Product list is not empty
- Token is present in login response

## Tools Used
- Postman
- JavaScript assertions in Postman Tests

## Evidence
Screenshots of successful test execution are stored in:  
`api-testing/reports/`

## Result
All test cases executed successfully and met expected results.
