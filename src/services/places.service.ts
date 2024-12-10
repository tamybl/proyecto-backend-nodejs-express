import { placesModel } from "../models/places.model";
import { Place } from "../interfaces/place.interface"

const getAllPlaces = async (): Promise<Place[]> => {
  const places = await placesModel.readAll();
  return places as Place[]; // Aseguramos el tipo esperado
};

const getPlaceById = async (id: number): Promise<Place> => {
  const place = await placesModel.getById(id);

  if (!place) {
    throw new Error("Place doesn't exists");
  }
  return place as Place;
};

export const placesService = {
  getAllPlaces,
  getPlaceById
};
