import { Router } from "express";
import { placesController } from "../controllers/places.controller";

const router = Router();

// Path fijo: http://localhost:3000/api/places

// Lee todos los lugares turisticos
router.get("/", placesController.getPlaces);

export default router;
