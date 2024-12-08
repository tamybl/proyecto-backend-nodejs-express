import express, { Application } from "express";
import placesRoute from "./routes/places.route";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";

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

// Ruta pública para iniciar sesión y registrarse
app.use("/api/auth", authRoute);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});
