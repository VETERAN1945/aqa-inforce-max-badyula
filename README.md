# Test Automation Project - Restful Booker Platform

Test automation project using Playwright framework covering room booking and contact form functionality.

## 📋 Project Overview

This project contains comprehensive testing for the Restful Booker Platform (https://automationintesting.online/), including:
- **Manual test cases** documenting room booking functionality
- **UI automation tests** using Playwright and Page Object Model
- **API automation tests** for room management operations
- **Contact form tests** covering positive and negative scenarios
- **Bug report** documenting critical issues found during testing
- **CI/CD pipeline** via GitHub Actions

## 🏗️ Project Structure
```
aqa-inforce-max-badyula/
├── .github/
│   └── workflows/
│       └── tests.yml       # GitHub Actions CI/CD pipeline
├── fixtures/               # Centralized test data
│   └── userData.js         # User, booking and contact data for reuse
├── pages/                  # Page Object Model
│   ├── BookingPage.js      # Booking page interactions and locators
│   └── ContactPage.js      # Contact form interactions and locators
├── tests/
│   ├── ui/                 # UI automation tests
│   │   ├── booking.spec.js # 3 UI booking test scenarios
│   │   └── contact.spec.js # 3 UI contact form test scenarios
│   └── api/                # API automation tests
│       └── rooms.spec.js   # 4 API test scenarios
├── test-cases.txt          # Manual test cases (7 scenarios)
├── bug-report.txt          # Critical bug documentation
├── package.json
├── playwright.config.js
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VETERAN1945/aqa-inforce-max-badyula.git
cd aqa-inforce-max-badyula
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## ▶️ Running Tests

### Run all tests (UI + API):
```bash
npm test
```

### Run booking UI tests only:
```bash
npx playwright test tests/ui/booking.spec.js
```

### Run contact form tests only:
```bash
npx playwright test tests/ui/contact.spec.js
```

### Run API tests only:
```bash
npx playwright test tests/api/rooms.spec.js
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

### Part 2: Automation

#### Booking UI Tests (`tests/ui/booking.spec.js`)

1. **TC_001: Book room with valid data**
   - Opens Double room booking page
   - Fills form with valid data from fixtures/userData.js
   - Submits booking and verifies success

2. **TC_002: Invalid email shows error**
   - Enters invalid email (missing @ symbol)
   - Verifies validation error message appears

3. **TC_003: Unavailable date selection**
   - Attempts to click on unavailable date
   - Verifies application handles it gracefully (bug was fixed)

#### Contact Form UI Tests (`tests/ui/contact.spec.js`)

1. **TC_001: Successful message submission with valid data**
   - Fills all contact form fields with valid data
   - Submits form and verifies success message

2. **TC_005: Cannot submit with invalid email format**
   - Enters email without @ symbol
   - Verifies error message appears

3. **TC_006: Cannot submit with phone exceeding maximum length**
   - Enters phone number longer than 21 characters
   - Verifies validation error message

#### API Tests (`tests/api/rooms.spec.js`)

1. **API_TC_001: Get all rooms** — Retrieves list of all available rooms
2. **API_TC_002: Get specific room** — Fetches details for room ID 1
3. **API_TC_003: Create booking** — Creates new booking via API
4. **API_TC_004: Get room by ID 2** — Retrieves room details by ID

## 🤖 CI/CD Pipeline

This project uses **GitHub Actions** for automated test execution.

Tests run automatically on every `git push` to the `main` branch:

```
Push code → GitHub creates virtual Linux server
         → Installs Node.js and dependencies
         → Installs Chromium browser
         → Runs all 10 tests
         → Saves HTML report as artifact
```

**Results:** 10/10 tests passing in CI ✅

## 🐛 Known Issues & Bugs

### Critical Bug (Documented in bug-report.txt)

**Issue:** Application crashed when clicking unavailable booking dates

**Severity:** CRITICAL | **Priority:** HIGH | **Status:** Fixed by developers

**Steps to Reproduce:**
1. Navigate to room booking page
2. Click on a date marked as "Unavailable"
3. Application displayed error: "Application error: a client-side exception has occurred"

## ⚠️ Known Limitations

1. **Live Site Testing** — Tests run against live production site, real bookings are created
2. **Room Availability** — Rooms can become fully booked after test execution
3. **No Cleanup Mechanism** — Test data persists after execution, manual cleanup via Admin panel may be needed
   - Admin access: https://automationintesting.online/#/admin (admin/password)

## 🔧 Technologies Used

- **Playwright ^1.40.0** — End-to-end testing framework
- **JavaScript** — Programming language
- **Node.js** — Runtime environment
- **Page Object Model** — Design pattern for maintainable test code
- **GitHub Actions** — CI/CD pipeline for automated test execution

## 📊 Test Results

**UI Booking Tests:** 3/3 passing  
**UI Contact Form Tests:** 3/3 passing  
**API Tests:** 4/4 passing  
**Total: 10/10 ✅**

## 👤 Author

**Max Badyula**
- GitHub: [github.com/VETERAN1945](https://github.com/VETERAN1945)

## 📌 Additional Notes

- Test data centralized in fixtures/userData.js for easy maintenance
- BASE_URL managed via playwright.config.js — not hardcoded in tests
- Proper waits using waitFor() instead of hardcoded timeouts
- Bug discovery during manual testing demonstrates exploratory testing skills
- Tests include both positive and negative scenarios