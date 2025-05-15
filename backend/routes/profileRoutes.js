import express from "express";
const router = express.Router();
import { getProfile } from "../controllers/profileControllers.js";
import { verifyAccessToken } from "../middlewares/index.js";

// Routes beginning with /api/profile
router.get("/", getProfile);

export default router;
