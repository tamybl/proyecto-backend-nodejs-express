import { Request, Response } from "express";
import { placesService } from "../services/places.service";

const getPlaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const places = await placesService.getAllPlaces();
    res.status(200).json(places);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
    res.status(500).json({ error: "Error de Servidor" });
  }
};

const getPlaceById = async (req: Request, res: Response):Promise<any> => {
  try {
    const id = parseInt(req.params.id, 10); // Convertir ID a número
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const place = await placesService.getPlaceById(id); // Llamar al servicio
    return res.status(200).json(place); // Responder con el lugar encontrado
  } catch (error: any) {
    if (error.message === "Place doesn't exist") {
      return res.status(404).json({ error: "Place not found" });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const placesController = {
  getPlaces,
  getPlaceById
};
