import { userService } from "./user.service";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Interfaz para el token de respuesta
interface AuthResponse {
  token: string;
}

// Función para login con email y contraseña
const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const users = await userService.getAllUsers();

  // Verificar que el usuario exista
  const user = users.find((item) => item.email === email);

  if (!user) {
    throw new Error("User not found"); // Si no existe el usuario, lanzar un error
  }

  // Comparar los hash de contraseñas
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new Error("Invalid password"); // Si la contraseña no es válida, lanzar un error
  }

  // Generar el JSON Web Token
  const secret = process.env.JWT_SECRET || "defaultSecret";
  const token = jwt.sign({ email: user.email }, secret, {
    expiresIn: "1h",
  });

  return { token };
};

// Exportar el servicio
export const authService = {
  loginWithEmailAndPassword,
};
