import { Request, Response } from "express";
import { placesService } from "../services/places.service";

const getPlaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const places = await placesService.getAllPlaces();
    res.json({ places });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
    res.status(500).json({ error: "Error de Servidor" });
  }
};

export const placesController = {
  getPlaces,
};
