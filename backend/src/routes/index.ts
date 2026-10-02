import Router from "express";
import { classifyCategory } from "./classifyCategory.routes.js";
export const apiRouter = Router();

apiRouter.use("/classify", classifyCategory);
