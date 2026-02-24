// tests/api/rooms.spec.js

const { test, expect } = require('@playwright/test');
const { validBooking } = require('../../fixtures/userData');

test.describe('Room Management - API Tests', () => {

  // API_TC_001: Get all rooms
  test('API_TC_001: Get all rooms', async ({ request }) => {
    // baseURL из playwright.config.js — просто пишем путь
    const response = await request.get('/api/room/');

    expect(response.ok()).toBeTruthy();
    const data = await response.json();

    expect(data.rooms).toBeDefined();
    expect(Array.isArray(data.rooms)).toBeTruthy();
    expect(data.rooms.length).toBeGreaterThan(0);
  });

  // API_TC_002: Get specific room by ID
  test('API_TC_002: Get specific room by ID', async ({ request }) => {
    const response = await request.get('/api/room/1');

    expect(response.ok()).toBeTruthy();
    const room = await response.json();

    expect(room.roomid).toBe(1);
    expect(room.type).toBeDefined();
  });

  // API_TC_003: Create booking
  test('API_TC_003: Create booking', async ({ request }) => {
    // данные из fixtures — не хардкодим прямо в тесте
    const response = await request.post('/api/booking/', {
      data: validBooking
    });

    expect(response.ok()).toBeTruthy();
    const booking = await response.json();

    expect(booking.bookingid).toBeDefined();
    expect(booking.booking.firstname).toBe(validBooking.firstname);
  });

  // API_TC_004: Get room by ID = 2
  test('API_TC_004: Get room by ID 2', async ({ request }) => {
    const response = await request.get('/api/room/2');

    expect(response.ok()).toBeTruthy();
    const room = await response.json();

    expect(room.type).toBeDefined();
    expect(room.roomid).toBe(2);
  });
});