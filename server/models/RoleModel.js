import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Role = mongoose.model("Roles", RoleSchema);

export default Role;
