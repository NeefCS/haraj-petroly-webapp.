// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// simple route
app.get("/", (req, res) => {
  res.send("Server running successfully 🚀");
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
