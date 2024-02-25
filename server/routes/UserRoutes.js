import express from "express";
import userController from "../controllers/UserController.js";
import verfyToken from "../middlewares/verifyToken.js";
const UserRouter = express.Router();

UserRouter.post("/register", userController.Register);
UserRouter.get("/allusers", verfyToken.cheakToken, userController.getUsers);
UserRouter.put(
  "/edituser/:id",
  verfyToken.cheakToken,
  verfyToken.cheakPermission,
  userController.editUser
);
UserRouter.delete(
  "/delete/:id",
  verfyToken.cheakToken,
  verfyToken.cheakPermission,
  userController.deleteUser
);

export default UserRouter;
