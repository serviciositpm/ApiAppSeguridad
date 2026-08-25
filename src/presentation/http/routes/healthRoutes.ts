import { Router } from "express";

// Endpoint nuevo, requerido por el HEALTHCHECK del Dockerfile.
export const healthRoutes = Router();
healthRoutes.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});
