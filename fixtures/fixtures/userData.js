// fixtures/userData.js
// Centralized test data - change here, applies everywhere

const validUser = {
  firstname: 'John',
  lastname: 'Smith',
  email: 'john.smith@test.com',
  phone: '38050123456789'
};

const invalidEmailUser = {
  firstname: 'John',
  lastname: 'Smith',
  email: 'john.smithtest.com', // no @ symbol
  phone: '38050123456789'
};

const validBooking = {
  roomid: 1,
  firstname: 'John',
  lastname: 'Smith',
  depositpaid: true,
  email: 'john.smith@test.com',
  phone: '38050123456789',
  bookingdates: {
    checkin: '2026-06-01',
    checkout: '2026-06-02'
  }
};

module.exports = { validUser, invalidEmailUser, validBooking };