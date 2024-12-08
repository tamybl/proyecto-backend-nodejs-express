import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();

// Login de usuario
router.post("/login", authController.login);

// Registro de usuario
router.post("/register", authController.register);

export default router;
