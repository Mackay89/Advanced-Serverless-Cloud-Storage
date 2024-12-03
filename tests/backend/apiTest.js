const request = require('supertest');
const app = require('../../src/backend/app');  // Assuming backend app is here

describe('Backend Tests', () => {
  test('GET /api/status returns 200', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Server is running');
  });

  test('POST /api/upload returns 201', async () => {
    const response = await request(app).post('/api/upload').send({ file: 'dummyfile' });
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });
});

