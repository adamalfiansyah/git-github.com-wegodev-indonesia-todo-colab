import express from "express";
import { createTask } from '../controllers/TaskController.js';
var router = express.Router();

router.post('/', createTask);

export default router;