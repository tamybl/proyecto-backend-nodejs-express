import { nanoid } from "nanoid";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import bcrypt from "bcryptjs";


// Obtener todos los usuarios
const getAllUsers = async () => {
  const allUsers = await UserModel.findAll();
  return allUsers;
};

// Crear un usuario con email y contraseña
const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  const user = await UserModel.getByEmail(email);

  if (user) {
    throw new Error("User already exists");
  }

  // Hashear la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  // Agregar el nuevo usuario a la Base de datos
  const newUser = await UserModel.create(email, hashedPassword);
  return newUser;
};

// Exportar el servicio
export const userService = {
  getAllUsers,
  createUserWithEmailAndPassword,
};
