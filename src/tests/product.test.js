const request = require('supertest');
const app = require('../app');
require('../models');

let id;
let token;

beforeAll(async () => {
    const user = {
        email: "test@gmail.com",
        password: "12345",
    }
    const res = await request(app).post('/users/login').send(user);
    token = res.body.token;
})


test('GET /products ', async () => {
    const res = await request(app)
        .get('/products')
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
});


test("POST /products debe de crear un producto", async () => {
    const product = {
        title: "Iphone 15",
        description: "Example",
        brand: "Apple",
        price: "1999.99"
    }
    const res = await request(app)
        .post('/products')
        .send(product)
        .set('Authorization', `Bearer ${token}`)
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(product.name);
});

test('PUT /products/:id actualiza el categoryId de un producto', async () => {
    const product = {
        categoryId: 2
    }
    const res = await request(app)
        .put(`/products/${id}`)
        .send(product)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200);
})



test('DELETE /products/:id', async () => {
    const res = await request(app)
        .delete(`/products/${id}`)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
})