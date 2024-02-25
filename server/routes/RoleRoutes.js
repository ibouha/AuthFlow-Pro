import express from "express";
import roleController from "../controllers/RoleController.js";
const RoleRouter = express.Router();

RoleRouter.post("/createrole", roleController.createRole);
RoleRouter.get("/getroles", roleController.getAllRoles);
RoleRouter.put("/updaterole", roleController.updateRole);
RoleRouter.delete("/deleterole", roleController.deleteRole);

export default RoleRouter;
