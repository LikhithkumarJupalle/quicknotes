import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import noteRoutes from "./routes/notes.routes";

// Load env variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Default route to test server
app.get("/", (_req, res) => {
  res.send("🚀 Backend is running!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
