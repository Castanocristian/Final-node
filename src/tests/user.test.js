const request = require('supertest');
const app = require('../app');


let id;
let token;


test("POST /users debe de crear un usuario", async () => {
    const user = {
        firstName: "Cristian",
        lastName: "Castano",
        email: "cris@gmail.com",
        password: "12345",
        phone: "123456",
    }
    const res = await request(app).post('/users').send(user);
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.firstName).toBe(user.firstName);
});

test('POST /users(login debe retornar el usuario logueado ', async () => {
    const body = {
        email: "cris@gmail.com",
        password: "12345"
    }
    const res = await request(app).post('/users/login').send(body);
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
});




test('GET /users debe de traer todos los usuarios', async () => {
    const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
});






test("PUT /users/:id Debe actualizar un usuario", async () => {
    const user = {
        firstName: "Cristian Update"
    }
    const res = await request(app).put(`/users/${id}`)
        .send(user)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200)
    expect(res.body.firstName).toBe(user.firstName)
});





test('POST /users(login debe retornar las credenciales incorrectas', async () => {
    const body = {
        email: "incorrecto@gmail.com",
        password: "incorrecto1234"
    }
    const res = await request(app).post('/users/login').send(body);
    expect(res.status).toBe(401);
});




test("DELETE /users/:id debe eliminar un usuario", async () => {
    const res = await request(app).delete(`/users/${id}`)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
});