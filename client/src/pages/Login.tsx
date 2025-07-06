import React, { useState } from "react";
import { verifyOtp, sendOtp } from "../services/api";
import "../styles/Login.css"; // ✅ Import the CSS styling

interface Props {
  onAuth: (token: string, name: string) => void;
  goToRegister: () => void;
}

const Login: React.FC<Props> = ({ onAuth, goToRegister }) => {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    try {
      await sendOtp(email);
      setStep("otp");
    } catch (err) {
      console.error(err);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await verifyOtp("", email, otp); // Name not needed during login
      onAuth(res.data.token, res.data.name);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {step === "email" ? (
          <>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
            <button onClick={handleSendOtp} className="login-button">
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="login-input"
            />
            <button onClick={handleVerifyOtp} className="login-button verify-button">
              Verify OTP
            </button>
          </>
        )}

        <p className="login-footer-text">
          New user?{" "}
          <button className="login-footer-button" onClick={goToRegister}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
