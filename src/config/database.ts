import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import User from '../models/user.model'; 
import Place from '../models/places.model';
dotenv.config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false, // Desactiva logs de SQL para reducir ruido
    models: [User, Place]
});

// Verificar conexión
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
})();


export default sequelize;