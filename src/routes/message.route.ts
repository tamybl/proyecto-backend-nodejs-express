import { Router } from "express";
import { MessageController } from "../controllers/message.controller";

const router = Router();

router.get("/messages", MessageController.getMessages);

export default router;
