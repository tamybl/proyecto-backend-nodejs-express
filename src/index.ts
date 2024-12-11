import express, { Application } from "express";
import placesRoute from "./routes/places.route";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";
import { pool } from "./config/database";

// Configuración del servidor
const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar el request body
app.use(express.json());

// Habilitar rutas públicas y protegidas

// Ruta privada de usuarios
app.use("/api/users", userRoute);

// Ruta pública de lugares
app.use("/api/places", placesRoute);

// Ruta publica places por ID
app.use("/api/places/:id", placesRoute);

// Ruta pública para iniciar sesión y registrarse
app.use("/api/auth", authRoute);

const main = async() => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    console.log(rows[0].now, 'db conectada');
    // Iniciar el servidor una vez que se verifica la conexion a la bd
    app.listen(port, () => {
      console.log(`Servidor levantado en el puerto ${port}`);
    });
  }
  catch (error){
    console.log(error);
  }
}

main();

export default app;

