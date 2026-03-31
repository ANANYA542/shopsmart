jest.setTimeout(60000);
const request = require('supertest');
const app = require('../src/app');
const { connect, closeDatabase, clearDatabase } = require('./testDbSetup');
const Product = require('../src/models/Product');

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

describe('Integration Tests: Product API', () => {

    it('GET /api/products - successfully fetches all products', async () => {
        // Seed dummy products
        await Product.create({ title: "Obsidian Watch", category: "watches", price: 299, stock: 10 });
        await Product.create({ title: "Midnight Truffles", category: "confectionery", price: 45, stock: 20 });

        const res = await request(app).get('/api/products');
        
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBe(2);
        
        // Ensure properties map
        const titles = res.body.map(p => p.title);
        expect(titles).toContain("Obsidian Watch");
        expect(titles).toContain("Midnight Truffles");
    });
    
    it('GET /api/products/:id - successfully fetches a single product', async () => {
        const item = await Product.create({ title: "Atelier Gown", category: "fashion", price: 1200, stock: 5 });

        const res = await request(app).get(`/api/products/${item._id}`);
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Atelier Gown');
        expect(res.body).toHaveProperty('price', 1200);
    });

    it('GET /api/products/:id - fails elegantly with 404 on bad mongo id', async () => {
        // Provide a valid format mongo ID that does not exist 
        const res = await request(app).get(`/api/products/645b23d9b0f49a888c34f19b`);
        
        expect(res.statusCode).toEqual(404);
        expect(res.body.message).toMatch(/Product not found/i);
    });
});
