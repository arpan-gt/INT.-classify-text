import Router from "express";
import { classifyController } from "../controllers/classifyController.controllers.js";
export const classifyCategory = Router();
classifyCategory.post("/", classifyController);
