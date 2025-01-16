import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";
import { User as UserI } from "../interfaces/user.interface";
import { User as UserModel } from "../models/user.model";


// Obtener todos los usuarios
const getAllUsers = async () => {
  const allUsers = await UserModel.findAll();
  return allUsers.map((user) => user.toJSON() as UserI);
};

// Crear un usuario con email y contraseña
const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserI> => {
  const existingUser = await UserModel.findOne({where: {email} });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hashear la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  // Agregar el nuevo usuario a la Base de datos
  const newUser = await UserModel.create({
    id: nanoid(),
    email,
    password: hashedPassword,
  });
  return newUser.toJSON() as UserI;
};

// Exportar el servicio
export const userService = {
  getAllUsers,
  createUserWithEmailAndPassword,
};
