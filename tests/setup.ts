import { beforeAll, afterAll } from 'vitest';
import { pool } from '../src/config/database'; 

beforeAll(async () => {
    console.log('Configurando entorno de pruebas...');
    // Opcional: Inicializar bases de datos o mockear dependencias
});

afterAll(async () => {
    console.log('Cerrando recursos de pruebas...');
    await pool.end(); // Cierra conexiones a la base de datos
});