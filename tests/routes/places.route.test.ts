
import express from 'express';
import supertest from 'supertest';
import placesRoute from "../../src/routes/places.route";

const app = express();

// Ruta pública de lugares
app.use("/api/places", placesRoute);

// Ruta publica places por ID
app.use("/api/places/:id", placesRoute);

describe('Pruebas para las rutas GET de places', () => {
    it('GET /api/places - debería devolver una lista de lugares', async () => {
        const res = await supertest(app).get('/api/places');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true); // Verifica que la respuesta es una lista
    });

    it('GET /api/places/:id - debería devolver un lugar especifico', async () => {
        const res = await supertest(app).get('/api/places/1'); 
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id: 1,
            name: expect.any(String),
            country: expect.any(String),
            description: expect.any(String),
            image: expect.any(String)
        });
    });
});
