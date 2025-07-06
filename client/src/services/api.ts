import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Send OTP to user's email
export const sendOtp = (email: string) => 
  API.post("/auth/send-otp", { email });

// Verify OTP and log in/register
export const verifyOtp = (name: string, email: string, otp: string) =>
  API.post("/auth/verify-otp", { name, email, otp });

// Create a new note
export const createNote = (title: string, token: string) =>
  API.post("/notes", { title }, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Get all notes for the logged-in user
export const getNotes = (token: string) =>
  API.get("/notes", {
    headers: { Authorization: `Bearer ${token}` },
  });

// Delete a note
export const deleteNote = (id: string, token: string) =>
  API.delete(`/notes/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export default API;
