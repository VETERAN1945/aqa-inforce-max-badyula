class ContactPage {
  constructor(page) {
    this.page = page;

    // Локаторы
    this.nameInput = page.getByTestId('ContactName');
    this.emailInput = page.getByTestId('ContactEmail');
    this.phoneInput = page.getByTestId('ContactPhone');
    this.subjectInput = page.getByTestId('ContactSubject');
    this.messageInput = page.getByTestId('ContactDescription');
    this.submitButton = page.getByRole('button', { name: 'Submit' });

    // Результаты
    this.successMessage = page.getByRole('heading', { name: 'Thanks for getting in touch' });
    this.errorMessage = page.locator('.alert-danger');
  }

  async scrollToForm() {
    await this.nameInput.scrollIntoViewIfNeeded();
  }

  async fillForm(name, email, phone, subject, message) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}

module.exports = { ContactPage };