import PlaceModel  from "../models/places.model";
import { Place as PlaceI } from "../interfaces/place.interface"

const getAllPlaces = async (): Promise<PlaceI[]> => {
  const places = await PlaceModel.findAll();
  return places as PlaceI[]; // Convertir a un array de objetos de tipo Place
};

const getPlaceById = async (id: number): Promise<PlaceI> => {
  const place = await PlaceModel.findByPk(id);
  if (!place) {
    throw new Error("Place doesn't exists");
  }
  return place as PlaceI;
};

export const placesService = {
  getAllPlaces,
  getPlaceById
};
