import express, { Application } from "express";
import dotenv from "dotenv";
import placesRoute from "./routes/places.route";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";
import sequelize from "./config/database";
import path from "path";
import { fileURLToPath } from "url";
import { initializeSocketServer } from "./services/socket.service"; // Importar WebSockets

// Cargar variables de entorno
dotenv.config();

// Configuración del servidor
const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar el request body
app.use(express.json());

// Habilitar rutas públicas y protegidas
app.use("/api/users", userRoute);
app.use("/api/places", placesRoute);
app.use("/api/auth", authRoute);

// Validación de variables de entorno
if (!process.env.DB_HOST || !process.env.PORT || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  console.error("Faltan variables de entorno requeridas para la base de datos.");
  process.exit(1); // Finaliza el proceso si no están definidas
}

// Necesario si usas `type: "module"`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde `public/`
app.use(express.static(path.join(__dirname, "../public")));

const main = async () => {
  try {
    // Verifica la conexión a la base de datos con Sequelize
    await sequelize.authenticate();
    console.log("Conexión a la base de datos verificada exitosamente.");

    // Sincroniza las tablas
    await sequelize.sync({ alter: true });
    console.log("Tablas sincronizadas correctamente.");

    // Inicializar WebSockets
    const server = initializeSocketServer(app);

    // Inicia el servidor después de confirmar la conexión
    server.listen(port, () => {
      console.log(`Servidor levantado en el puerto ${port}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos o sincronizar tablas:", error);
  }
};

main();
export default app;
