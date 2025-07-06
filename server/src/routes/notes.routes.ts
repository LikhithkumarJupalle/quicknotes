import express from "express";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  // Create note
});

router.get("/", verifyToken, async (req, res) => {
  // Get notes
});

router.delete("/:id", verifyToken, async (req, res) => {
  // Delete note
});

export default router;
