import { placesModel } from "../models/places.model";

interface Place {
  id: string;
  name: string;
  country: string;
  description: string;
  imagen: string;
}

const getAllPlaces = async (): Promise<Place[]> => {
  const places = await placesModel.readPlaces();
  return places as Place[]; // Aseguramos el tipo esperado
};

export const placesService = {
  getAllPlaces,
};
