import express from "express";
import permissionController from "../controllers/PermissionController.js";
const PermissionRouter = express.Router();

PermissionRouter.post(
  "/createpermission",
  permissionController.createPermission
);
PermissionRouter.get("/getpermissions", permissionController.getAllPermissions);

export default PermissionRouter;
