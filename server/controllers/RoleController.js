import RoleModel from "../models/RoleModel.js";

const postRole = async (req, res) => {
  try {
    const { name } = req.body;
    const existingRole = await RoleModel.findOne({ name: name });
    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }
    const newRole = new RoleModel({ name: name });
    await newRole.save();
    return res.status(201).json({ message: "Role created" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default postRole;
