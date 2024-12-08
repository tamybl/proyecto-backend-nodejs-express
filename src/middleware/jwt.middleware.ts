import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  email: string;
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const secret = process.env.JWT_SECRET || "defaultSecret";
    const payload = jwt.verify(token, secret) as JwtPayload;

    // Extender el tipo de Request para incluir email
    (req as any).email = payload.email;

    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "Invalid token" });
  }
};
