import express from "express";
const router = express.Router();
import {
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
} from "../controllers/taskControllers.js";
import { verifyAccessToken } from "../middlewares/index.js";

// Routes beginning with /api/tasks
router.get("/", getTasks);
router.get("/:taskId", getTask);
router.post("/", postTask);
router.put("/:taskId", putTask);
router.delete("/:taskId", deleteTask);

export default router;
