import mongoose from "mongoose";

const PermissionSchema = mongoose.Schema({
  create: {
    type: Boolean,
    required: true,
    default: false,
  },
  get: {
    type: Boolean,
    required: true,
    default: false,
  },
  update: {
    type: Boolean,
    required: true,
    default: false,
  },
  delete: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Permission = mongoose.model("Permissions", PermissionSchema);

export default Permission;
