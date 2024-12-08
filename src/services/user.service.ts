import { nanoid } from "nanoid";
import { userModel } from "../models/user.model";
import bcrypt from "bcryptjs";

// Definición de la interfaz para el usuario
interface User {
  id: string;
  email: string;
  password: string;
}

// Obtener todos los usuarios
const getAllUsers = async (): Promise<User[]> => {
  const users = await userModel.readUsers();
  return users as User[]; // Aseguramos el tipo esperado
};

// Crear un usuario con email y contraseña
const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  const users = await getAllUsers();
  const userExist = users.find((item) => item.email === email);

  if (userExist) {
    throw new Error("User already exists");
  }

  // Hashear la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Crear un nuevo usuario
  const newUser: User = {
    id: nanoid(),
    email,
    password: hashedPassword,
  };

  // Agregar el nuevo usuario al JSON
  users.push(newUser);
  await userModel.writeUsers(users);
  return newUser;
};

// Exportar el servicio
export const userService = {
  getAllUsers,
  createUserWithEmailAndPassword,
};
