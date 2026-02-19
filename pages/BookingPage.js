class BookingPage {
  constructor(page) {
    this.page = page;
    
    // Calendar
    this.calendar = page.locator('.rbc-calendar');
    
    // Reserve button
    this.reserveButton = page.getByRole('button', { name: 'Reserve Now' });
    
    // Form inputs
    this.firstnameInput = page.getByRole('textbox', { name: 'Firstname' });
    this.lastnameInput = page.getByRole('textbox', { name: 'Lastname' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
    
    // Success messages
    this.returnHomeLink = page.getByRole('link', { name: 'Return home' });
    
    // Error messages
    this.errorAlert = page.locator('.alert-danger, [role="alert"]').first();
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }

  async openDoubleRoomBooking() {
    // Scroll down to rooms
    await this.page.evaluate(() => window.scrollTo(0, 800));
    await this.page.waitForTimeout(1500);
    
    // Wait for "Book now" links to be visible
    await this.page.waitForSelector('a.btn-primary:has-text("Book now")', { timeout: 10000 });
    
    // Click the THIRD "Book now" (nth(2) = Double room)
    await this.page.getByRole('link', { name: 'Book now' }).nth(2).click();
    await this.page.waitForTimeout(2000);
    
    // Wait for calendar to appear
    await this.calendar.waitFor({ state: 'visible', timeout: 10000 });
  }

  async selectDatesAndOpenForm() {
    // Wait for calendar to be ready
    await this.page.waitForTimeout(2000);
    
    // Click on "Selected" (blue selected dates)
    await this.page.getByText('Selected').click();
    await this.page.waitForTimeout(1000);
    
    // Click Reserve Now
    await this.reserveButton.click();
    await this.page.waitForTimeout(2000);
    
    // Wait for form
    await this.firstnameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.page.waitForTimeout(1000);
  }

  async fillBookingForm(firstname, lastname, email, phone) {
    // Wait for all fields to be ready
    await this.firstnameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.page.waitForTimeout(1000);
    
    // Fill with delays
    await this.firstnameInput.click();
    await this.firstnameInput.fill(firstname);
    await this.page.waitForTimeout(300);
    
    await this.lastnameInput.click();
    await this.lastnameInput.fill(lastname);
    await this.page.waitForTimeout(300);
    
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.page.waitForTimeout(300);
    
    await this.phoneInput.click();
    await this.phoneInput.fill(phone);
    await this.page.waitForTimeout(500);
  }

  async submitBooking() {
    // Make sure form is filled before submitting
    await this.page.waitForTimeout(1000);
    await this.reserveButton.click();
    await this.page.waitForTimeout(2000);
  }
}

module.exports = { BookingPage };