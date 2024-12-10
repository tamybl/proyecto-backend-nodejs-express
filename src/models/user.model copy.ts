import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const __dirname = path.resolve();

const pathFile = path.join(__dirname, "src/data/users.json");

// Lectura de datos
const readUsers = async () => {
  try {
    const data = await readFile(pathFile, "utf-8");
    const users = JSON.parse(data);
    return users;
  } catch (error) {
    console.error("Error leyendo el archivo users.json:", error);
    throw new Error("No se pudo leer la base de datos usuarios");
  }
};

const writeUsers = async (users: any) => {
    try {
      const data = JSON.stringify(users, null, 2);
      await writeFile(pathFile, data, "utf-8");
      console.log("Archivo actualizado exitosamente.");
    } catch (error) {
      console.error("Error escribiendo en el archivo users.json:", error);
      throw new Error("No se pudo escribir en la base de datos usuarios");
    }
  };

const addUser = async (newUser: any) => {
    try {
      const users = await readUsers();
      users.push(newUser);
      await writeUsers(users);
      console.log("Usuario añadido exitosamente.");
    } catch (error) {
      console.error("Error añadiendo usuario:", error);
      throw new Error("No se pudo añadir al usuario");
    }
  };
export const userModel = {
  readUsers,
  writeUsers,
  addUser
};