// src/controllers/auth.controller.ts
import { Request, Response } from "express";

export const sendOTP = async (req: Request, res: Response) => {
  console.log("Sending OTP...");
  return res.status(200).json({ message: "OTP sent successfully" });
};

export const verifyOTPAndRegister = async (req: Request, res: Response) => {
  console.log("Verifying OTP and registering...");
  return res.status(200).json({ message: "User registered successfully" });
};
