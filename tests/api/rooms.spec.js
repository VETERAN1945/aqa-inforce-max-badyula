const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://automationintesting.online/api';

test.describe('Room Management - API Tests', () => {
  test('API_TC_001: Get all rooms', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/room/`);
    
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    
    expect(data.rooms).toBeDefined();
    expect(Array.isArray(data.rooms)).toBeTruthy();
    
    console.log(`✓ API_TC_001: Found ${data.rooms.length} rooms`);
  });

  test('API_TC_002: Get specific room', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/room/1`);
    
    expect(response.ok()).toBeTruthy();
    const room = await response.json();
    
    expect(room.roomid).toBe(1);
    
    console.log(`✓ API_TC_002: Room ${room.roomid} - ${room.type}`);
  });

  test('API_TC_003: Create booking', async ({ request }) => {
    const bookingData = {
      roomid: 1,
      firstname: 'John',
      lastname: 'Smith',
      depositpaid: true,
      email: 'john.smith@test.com',
      phone: '+380501234567',
      bookingdates: {
        checkin: '2026-03-01',
        checkout: '2026-03-02'
      }
    };

    const response = await request.post(`${BASE_URL}/booking/`, {
      data: bookingData
    });

    expect(response.ok()).toBeTruthy();
    const booking = await response.json();
    
    expect(booking.bookingid).toBeDefined();
    
    console.log(`✓ API_TC_003: Booking ${booking.bookingid} created`);
  });

  test('API_TC_004: Get room by ID', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/room/2`);
    
    expect(response.ok()).toBeTruthy();
    const room = await response.json();
    
    expect(room.type).toBeDefined();
    
    console.log(`✓ API_TC_004: Room type is ${room.type}`);
  });
});