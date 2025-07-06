"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const notes_routes_1 = __importDefault(require("./routes/notes.routes"));
// Load env variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Default route to test server
app.get("/", (_req, res) => {
    res.send("🚀 Backend is running!");
});
// API Routes
app.use("/api/auth", auth_routes_1.default);
app.use("/api/notes", notes_routes_1.default);
// MongoDB connection
mongoose_1.default
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
