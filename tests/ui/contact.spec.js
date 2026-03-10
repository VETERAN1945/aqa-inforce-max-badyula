const { test, expect } = require('@playwright/test');
const { ContactPage } = require('../../pages/ContactPage');
const { validContact, invalidEmailContact } = require('../../fixtures/userData');

test.describe('Contact Form Tests', () => {

  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto('/');
    await contactPage.scrollToForm();
  });

  // TC-001: позитивный — валидные данные
  test('TC-001: Successful message submission with valid data', async ({ page }) => {
    await contactPage.fillForm(
      validContact.name,
      validContact.email,
      validContact.phone,
      validContact.subject,
      validContact.message
    );
    await contactPage.submitForm();

    await expect(contactPage.successMessage)
      .toBeVisible({ timeout: 30000 });
  });

  // TC-005: негативный — email без @
  test('TC-005: Cannot submit form with invalid email format', async ({ page }) => {
    await contactPage.fillForm(
      invalidEmailContact.name,
      invalidEmailContact.email,
      invalidEmailContact.phone,
      invalidEmailContact.subject,
      invalidEmailContact.message
    );
    await contactPage.submitForm();

    await expect(contactPage.errorMessage)
      .toBeVisible({ timeout: 10000 });
  });

  // TC-006: негативный — телефон больше 21 символа
  test('TC-006: Cannot submit form with phone exceeding maximum length', async ({ page }) => {
    await contactPage.fillForm(
      validContact.name,
      validContact.email,
      '3805012345678901234567890',
      validContact.subject,
      validContact.message
    );
    await contactPage.submitForm();

    await expect(contactPage.errorMessage)
      .toContainText('Phone must be between 11 and 21 characters.', { timeout: 10000 });
  });

});