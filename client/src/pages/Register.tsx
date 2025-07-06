import React, { useState } from "react";
import { sendOtp, verifyOtp } from "../services/api";
import "../styles/Register.css";

interface Props {
  onAuth: (token: string, name: string) => void;
  goToLogin: () => void;
}

const Register: React.FC<Props> = ({ onAuth, goToLogin }) => {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
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
      const res = await verifyOtp(name, email, otp); // Include DOB in backend if needed
      onAuth(res.data.token, res.data.name);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register</h2>

        {step === "email" ? (
          <>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="register-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="register-input"
            />
            <button onClick={handleSendOtp} className="register-button">
              Send OTP
            </button>
            <p className="register-footer-text">
              Already registered?{" "}
              <button className="register-footer-button" onClick={goToLogin}>
                Login
              </button>
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="register-input"
            />
            <button
              onClick={handleVerifyOtp}
              className="register-button verify-button"
            >
              Verify OTP
            </button>
            <p className="register-footer-text">
              Already registered?{" "}
              <button className="register-footer-button" onClick={goToLogin}>
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
