import RoleModel from "../models/RoleModel.js";

// Controller method to create a new role
const roleController = {
  createRole: async (req, res) => {
    try {
      const { name } = req.body;
      const role = await RoleModel.create({ name });

      res.status(201).json({
        success: true,
        role: role,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to create role" });
    }
  },

  // Controller method to get all roles
  getAllRoles: async (req, res) => {
    try {
      const roles = await RoleModel.find().populate("permissions");
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch roles" });
    }
  },

  // Controller method to update role
  updateRole: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, permissions } = req.body;
      const role = await RoleModel.findByIdAndUpdate(
        id,
        { name, permissions },
        { new: true }
      ).populate("permissions");
      if (!role) {
        return res.status(404).json({ error: "Role not found" });
      }
      res.json(role);
    } catch (error) {
      res.status(500).json({ error: "Failed to update role" });
    }
  },

  // Controller method to delete role
  deleteRole: async (req, res) => {
    try {
      const { id } = req.params;
      const role = await RoleModel.findByIdAndDelete(id);
      if (!role) {
        return res.status(404).json({ error: "Role not found" });
      }
      res.json({ message: "Role deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete role" });
    }
  },
};
export default roleController;
