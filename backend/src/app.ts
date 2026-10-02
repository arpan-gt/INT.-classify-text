import express from "express";
import { apiRouter } from "./routes/index.js";
import cors from "cors";
import { notFound } from "./lib/notFound.js";

export const expressApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", apiRouter);
  app.use(notFound);
  return app;
};
