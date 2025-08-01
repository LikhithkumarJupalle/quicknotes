"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTPAndRegister = exports.sendOTP = void 0;
const sendOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sending OTP...");
    return res.status(200).json({ message: "OTP sent successfully" });
});
exports.sendOTP = sendOTP;
const verifyOTPAndRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Verifying OTP and registering...");
    return res.status(200).json({ message: "User registered successfully" });
});
exports.verifyOTPAndRegister = verifyOTPAndRegister;
