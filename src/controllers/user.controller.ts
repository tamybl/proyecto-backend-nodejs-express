import { Request, Response } from "express";
import { userService } from "../services/user.service";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.json({
      email: (req as any).email, 
      users,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(500).json({ error: "Error de servidor" });
  }
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const newUser = await userService.createUserWithEmailAndPassword(email, password);

    res.json({ newUser });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message,
      });
      return;
    }
    res.status(500).json({ error: "Error de servidor" });
  }
};

export const userController = {
  getUsers,
  createUser,
};
