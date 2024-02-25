import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Permissions",
    },
  ],
});

const Role = mongoose.model("Role", RoleSchema);

export default Role;
