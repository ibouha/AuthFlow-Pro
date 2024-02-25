import PermissionModel from "../models/PermissionModel.js";

// Controller method to create a new permission
const permissionController = {
  createPermission: async (req, res) => {
    try {
      const { create, get, update, delete: del } = req.body;

      const permission = await PermissionModel.create({
        create,
        get,
        update,
        delete: del,
      });
      res.status(201).json({
        success: true,
        message: "Permission created successfully",
        permission,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to create permission" });
    }
  },

  // Controller method to get all permissions
  getAllPermissions: async (req, res) => {
    try {
      const permissions = await PermissionModel.find();
      res.json(permissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch permissions" });
    }
  },
};

export default permissionController;
