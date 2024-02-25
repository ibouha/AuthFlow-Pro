import express from "express";
import AuthController from "../controllers/AuthController.js";
const AuthRouter = express.Router();

AuthRouter.post("/login", AuthController.Login);
AuthRouter.post("/logout", AuthController.Logout);

export default AuthRouter;
