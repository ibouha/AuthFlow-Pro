import express from "express";
import userController from "../controllers/UserController.js";
const UserRouter = express.Router();

UserRouter.post("/register", userController.Register);
UserRouter.post("/login", userController.Login);

export default UserRouter;
