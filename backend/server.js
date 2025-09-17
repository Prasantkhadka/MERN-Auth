import express from "express";
import cors from "cors"; // to connect with frontend
import "dotenv/config"; //set environment variables
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express(); //to use the express app
const port = process.env.PORT || 6001;
connectDB();

const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

/// API endpoints
app.get("/", (req, res) => {
  res.send("MERN AUTH API Running");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`APP running on http://localhost:${port}`));
