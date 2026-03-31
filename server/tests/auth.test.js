jest.setTimeout(60000);
const request = require('supertest');
const app = require('../src/app');
const { connect, closeDatabase, clearDatabase } = require('./testDbSetup');
const User = require('../src/models/User');

beforeAll(async () => {
    process.env.JWT_SECRET = 'test_secret_key';
    await connect();
});

afterEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await closeDatabase();
});

describe('Integration Tests: Auth API', () => {
    
    it('POST /api/auth/register - successfully creates a new user and returns JWT token', async () => {
        const payload = {
            name: "Atelier Tester",
            email: "test@atelier.com",
            password: "SecurePassword123"
        };
        
        const res = await request(app).post('/api/auth/register').send(payload);
        
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('name', 'Atelier Tester');
        expect(res.body).toHaveProperty('email', 'test@atelier.com');
        expect(res.body).not.toHaveProperty('password');
        
        // Assert user was actually written to the in-memory MongoDB
        const userInDb = await User.findOne({ email: 'test@atelier.com' });
        expect(userInDb).toBeTruthy();
    });

    it('POST /api/auth/login - successfully authenticates and returns JWT token', async () => {
        // First insert a user raw
        await request(app).post('/api/auth/register').send({
            name: "Atelier Login",
            email: "login@atelier.com",
            password: "password123"
        });

        // Now attempt login
        const res = await request(app).post('/api/auth/login').send({
            email: "login@atelier.com",
            password: "password123"
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('email', 'login@atelier.com');
    });

    it('POST /api/auth/login - rejects invalid credentials', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: "fake@atelier.com",
            password: "wrong"
        });

        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toMatch(/Invalid email or password/i);
    });
});
