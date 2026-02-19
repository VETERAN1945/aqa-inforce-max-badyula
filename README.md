# Test Automation Project - Restful Booker Platform

Test automation assignment for Gamicorp using Playwright framework.

## 📋 Project Overview

This project contains comprehensive testing for the Restful Booker Platform (https://automationintesting.online/), including:
- **Manual test cases** documenting room booking functionality
- **UI automation tests** using Playwright and Page Object Model
- **API automation tests** for room management operations
- **Bug report** documenting critical issues found during testing

## 🏗️ Project Structure
```
aqa-inforce-max-badyula/
├── test-cases.txt          # Manual test cases (7 scenarios)
├── bug-report.txt          # Critical bug documentation
├── pages/                  # Page Object Model
│   └── BookingPage.js      # Booking page interactions and locators
├── tests/
│   ├── ui/                 # UI automation tests
│   │   └── booking.spec.js # 3 UI test scenarios
│   └── api/                # API automation tests
│       └── rooms.spec.js   # 4 API test scenarios
├── package.json
├── playwright.config.js
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone or download this repository

2. Navigate to project directory:
```bash
cd aqa-inforce-max-badyula
```

3. Install dependencies:
```bash
npm install
```

4. Install Playwright browsers:
```bash
npx playwright install
```

## ▶️ Running Tests

### Run all tests (UI + API):
```bash
npm test
```

### Run UI tests only:
```bash
npx playwright test ui
```

### Run API tests only:
```bash
npx playwright test api
```

### Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

### Run specific test:
```bash
npx playwright test --grep "TC_001"
```

### View test report:
```bash
npx playwright show-report
```

## 📝 Test Scenarios

### Part 1: Manual Testing

**Location:** `test-cases.txt`

Contains 7 comprehensive test cases:
- ✅ TC_001: Successful booking with valid data
- ✅ TC_002: Invalid email format validation
- ⚠️ TC_003: Application crash on unavailable date (critical bug found)
- ✅ TC_004: Empty email validation
- ✅ TC_005: Empty firstname validation
- ✅ TC_006: Empty phone validation
- ✅ TC_007: All fields empty validation

**Critical Bug Found:** 
Application crashes when user clicks on unavailable dates. Full details in `bug-report.txt`.

### Part 2: Automation

#### UI Tests (`tests/ui/booking.spec.js`)

Three automated scenarios testing the booking flow:

1. **TC_001: Book room with valid data**
   - Opens Double room booking page
   - Selects available dates
   - Fills form with valid data
   - Submits booking
   - Verifies success or documents crash (known bug)

2. **TC_002: Invalid email shows error**
   - Opens booking page
   - Selects dates
   - Enters invalid email (missing @ symbol)
   - Verifies validation error message appears

3. **TC_003: Calendar loads on booking page**
   - Opens booking page
   - Verifies calendar component is visible
   - Confirms booking interface is accessible

#### API Tests (`tests/api/rooms.spec.js`)

Four API scenarios testing room management:

1. **API_TC_001: Get all rooms**
   - Retrieves list of all available rooms
   - Verifies response structure

2. **API_TC_002: Get specific room**
   - Fetches details for room ID 1
   - Validates room properties

3. **API_TC_003: Create booking**
   - Creates new booking via API
   - Verifies booking ID is returned

4. **API_TC_004: Get room by ID**
   - Retrieves room details by specific ID
   - Validates room type and properties

## 🐛 Known Issues & Bugs

### Critical Bug (Documented in bug-report.txt)

**Issue:** Application crashes when clicking unavailable booking dates

**Severity:** CRITICAL  
**Priority:** HIGH

**Steps to Reproduce:**
1. Navigate to room booking page
2. Click on a date marked as "Unavailable"
3. Application displays error: "Application error: a client-side exception has occurred"

**Expected Behavior:**
- Date should not be clickable, OR
- System should display user-friendly error message, OR
- Calendar should prevent selection

**Actual Behavior:**
- Entire application crashes
- Page refresh required to continue

**Impact:**
- Complete loss of user session
- Poor user experience
- Potential booking abandonment

## ⚠️ Known Limitations & Considerations

### Test Environment Limitations

1. **Live Site Testing**
   - Tests run against live production site (https://automationintesting.online/)
   - Real bookings are created during test execution
   - No sandbox/test environment available

2. **Room Availability**
   - Rooms can become fully booked after test execution
   - Tests may fail on subsequent runs if rooms are occupied
   - **Workaround:** Delete bookings via Admin panel or wait for automatic cleanup
   - Admin access: https://automationintesting.online/#/admin (admin/password)

3. **No Cleanup Mechanism**
   - Assignment requirements did not specify teardown/cleanup
   - Test data persists after execution
   - Manual cleanup via Admin panel may be needed

4. **Date Selection Behavior**
   - Application auto-selects nearest available dates
   - Tests interact with pre-selected dates rather than choosing specific dates
   - This is application behavior, not test limitation

5. **Application Stability**
   - Application has known crash bugs (documented)
   - Tests include error handling for application crashes
   - Some test scenarios verify both success and crash scenarios

### Recommendations for Future Runs

- Check room availability before running UI tests
- Use Admin panel to clear old bookings if needed
- Consider using different room types (Single/Double/Suite) to avoid conflicts
- Tests are designed to be resilient to application bugs

## 🔧 Technologies Used

- **Playwright ^1.40.0** - End-to-end testing framework
- **JavaScript** - Programming language
- **Node.js** - Runtime environment
- **Page Object Model** - Design pattern for maintainable test code
- **Playwright Test Runner** - Built-in test runner with reporting

## 📊 Test Execution Details

**Target Application:**
- Base URL: https://automationintesting.online/
- API Base URL: https://automationintesting.online/api
- Admin Panel: https://automationintesting.online/#/admin
- Credentials: admin / password

**Test Configuration:**
- Browser: Chromium (headless by default)
- Timeout: 30 seconds per test
- Screenshots: Captured on failure
- Traces: Recorded on first retry
- Reports: HTML format

## 📈 Test Results

All tests are independent and can run in any order. Expected results:

**UI Tests:** 3/3 passing (with proper room availability)
**API Tests:** 4/4 passing

Sample output:
```
✓ TC_001 PASSED: Booking successful
✓ TC_002 PASSED: Validation error shown
✓ TC_003 PASSED: Calendar visible

✓ API_TC_001: Found 3 rooms
✓ API_TC_002: Room 1 - Single
✓ API_TC_003: Booking 34 created
✓ API_TC_004: Room type is Double
```

## 👤 Author

**Max Badyula**
- GitHub: [github.com/VETERAN1945](https://github.com/VETERAN1945)
- Assignment: Gamicorp QA Engineer Position
- Completion Date: February 2026

## 📌 Additional Notes

- Bug discovery during manual testing demonstrates exploratory testing skills
- Tests include both positive and negative scenarios
- Code follows Page Object Model pattern for maintainability
- Proper waits and error handling implemented throughout
- Professional documentation of issues found

## 🙏 
