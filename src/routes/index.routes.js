import { Router } from "express";
import { ping } from "../controllers/index.controller.js";
import { authenticate } from "../../authMiddelware.js";  // Importa el middleware

const router = Router();

router.get('/ping', authenticate, ping);  // Aplica el middleware aquí

export default router;
