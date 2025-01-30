import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { verifyToken } from "../middleware/jwt.middleware";

const router = Router();

// path fijo: http://localhost:3000/api/users

// Leer todos los usuarios
router.get("/", verifyToken, userController.getUsers);

// Crear un usuario
router.post("/", userController.createUser);

export default router;
