// pages/BookingPage.js

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

    // Success / error
    this.returnHomeLink = page.getByRole('link', { name: 'Return home' });
    this.errorAlert = page.locator('.alert-danger, [role="alert"]').first();
  }

  async goto() {
    // baseURL берётся из playwright.config.js — не хардкодим URL здесь
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openDoubleRoomBooking() {
    await this.page.evaluate(() => window.scrollTo(0, 800));

    // waitFor вместо waitForTimeout — ждём элемент, не фиксированное время
    const bookNowLinks = this.page.getByRole('link', { name: 'Book now' });
    await bookNowLinks.first().waitFor({ state: 'visible', timeout: 10000 });

    // nth(2) = Double room (третья кнопка)
    await bookNowLinks.nth(2).click();

    // Ждём появления календаря
    await this.calendar.waitFor({ state: 'visible', timeout: 10000 });
  }

  async selectDatesAndOpenForm() {
    // Ждём пока появятся выбранные даты
    await this.page.getByText('Selected').waitFor({ state: 'visible', timeout: 10000 });
    await this.page.getByText('Selected').click();

    // Нажимаем Reserve Now
    await this.reserveButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.reserveButton.click();

    // Ждём появления формы
    await this.firstnameInput.waitFor({ state: 'visible', timeout: 10000 });
  }

  async fillBookingForm(firstname, lastname, email, phone) {
    await this.firstnameInput.waitFor({ state: 'visible', timeout: 10000 });

    await this.firstnameInput.fill(firstname);
    await this.lastnameInput.fill(lastname);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }

  async submitBooking() {
    await this.reserveButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.reserveButton.click();
  }
}

module.exports = { BookingPage };