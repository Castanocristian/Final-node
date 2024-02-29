const request = require('supertest');
const app = require('../app');
require('../models');

//let id;
//let token;

test('GET /images taera todas las images', async () => {
    const res = await request(app)
        .get('/product_images')
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
})


