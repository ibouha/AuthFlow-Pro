/* eslint-disable no-undef */
import jwt from "jsonwebtoken";
import env from "dotenv";
import UserModel from "../models/UserModel.js";

env.config();

const verfyToken = {
  cheakToken: async (req, res, next) => {
    const token = req.cookies["accesToken"];
    // const token = cookies.split("=")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
    const key = process.env.SECRET_KEY;
    try {
      const decoded = jwt.verify(token, key);
      if (!decoded) {
        return res.status(401).json({
          success: false,
          message: "Invalid token",
        });
      }

      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
  },
  cheakPermission: async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
    const key = process.env.SECRET_KEY;
    try {
      const decoded = jwt.verify(token, key);
      if (!decoded) {
        return res.status(401).json({
          success: false,
          message: "Invalid token",
        });
      }

      const userId = decoded.userId;
      const user = await UserModel.findById(userId).populate({
        path: "role",
        populate: {
          path: "permissions",
        },
      });

      const method = req.method.toUpperCase();

      switch (method) {
        case "GET":
          if (user.role.get) {
            next();
          } else {
            return res.status(401).json({
              success: false,
              message: "You are not authorized to access this resource",
            });
          }
          break;
        case "POST":
          if (user.role.create) {
            next();
          } else {
            return res.status(401).json({
              success: false,
              message: "You are not authorized to access this resource",
            });
          }
          break;
        case "PUT":
          if (user.role.update) {
            next();
          } else {
            return res.status(401).json({
              success: false,
              message: "You are not authorized to access this resource",
            });
          }
          break;
        case "DELETE":
          if (user.role.delete) {
            next();
          } else {
            return res.status(401).json({
              success: false,
              message: "You are not authorized to access this resource",
            });
          }
          break;
        default:
          return res.status(400).json({
            success: false,
            message: "Invalid HTTP method",
          });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

export default verfyToken;
