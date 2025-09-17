import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  signUp,
  verifyEmail,
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);

export default authRouter;
