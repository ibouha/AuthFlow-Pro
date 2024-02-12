import express from "express";
import postRole from "../controllers/RoleController.js";
const RoleRouter = express.Router();

RoleRouter.post("/rolePost", postRole);

export default RoleRouter;
