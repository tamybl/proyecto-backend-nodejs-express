import { readFile } from "node:fs/promises";
import path from "node:path";

const __dirname = path.resolve();

const pathFile = path.join(__dirname, "src/data/places.json");

// Lectura de datos
const readPlaces = async () => {
  try {
    const data = await readFile(pathFile, "utf-8");
    const places = JSON.parse(data);
    return places;
  } catch (error) {
    console.error("Error leyendo el archivo places.json:", error);
    throw new Error("No se pudo leer la base de datos de places");
  }
};

export const placesModel = {
  readPlaces,
};
