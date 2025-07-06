// src/routes/auth.routes.ts
import express from "express";
import { sendOTP, verifyOTPAndRegister } from "../controllers/auth.controller";

const router = express.Router();

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTPAndRegister);

export default router;
