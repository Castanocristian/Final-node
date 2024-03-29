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




test('GET /categories ', async () => {
    const res = await request(app)
        .get('/categories')
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
});


test("POST /categories debe de crear una categoria", async () => {
    const category = {
        name: "Laptop",
    }
    const res = await request(app)
        .post('/categories')
        .send(category)
        .set('Authorization', `Bearer ${token}`)
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(category.name);
});

test('DELETE /categories/:id', async () => {
    const res = await request(app)
    .delete(`/categories/${id}`)
    .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
})



