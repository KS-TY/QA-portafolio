# Bug Report — SauceDemo

**Title:** Error message overflows container on invalid login

**Environment:** Chrome / Windows 10  
**Severity:** Low  
**Priority:** Medium  
**Type:** UI / UX

**Description:**  
When the user enters invalid credentials, the error message is displayed but overflows outside its container, affecting readability and layout.

**Steps to Reproduce:**
1. Open https://www.saucedemo.com  
2. Enter invalid username/password  
3. Click Login

**Expected Result:**  
Error message is displayed inside the input container with proper alignment.

**Actual Result:**  
Error message overflows outside the container.

**Evidence:**  
![Login Error](Evidence/TC-02-login_error.png)

**Status:** Open
