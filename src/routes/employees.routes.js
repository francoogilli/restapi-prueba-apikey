import { Router } from "express";
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";
import { authenticate } from "../../authMiddelware.js";  // Importa el middleware

const router = Router();

router.get('/employees', authenticate, getEmployees);  // Aplica el middleware aquí
router.get('/employees/:id', authenticate, getEmployee);  // Aplica el middleware aquí
router.post('/employees', authenticate, createEmployee);  // Aplica el middleware aquí
router.patch('/employees/:id', authenticate, updateEmployee);  // Aplica el middleware aquí
router.delete('/employees/:id', authenticate, deleteEmployee);  // Aplica el middleware aquí

export default router;
