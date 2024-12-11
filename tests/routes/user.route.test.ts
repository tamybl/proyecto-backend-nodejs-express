
import express from 'express';
import supertest from 'supertest';
import userRoute from "../../src/routes/user.route";

const app = express();

app.use("/api/users", userRoute);

describe('Pruebas para las rutas GET de usuarios', () => {
    it('GET /api/users - debería devolver una lista de usuarios', async () => {
        const res = await supertest(app).get('/api/users');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true); // Verifica que la respuesta es una lista
    });
});