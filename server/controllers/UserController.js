/* eslint-disable no-undef */
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

const userController = {
  Register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      console.log(username, email, password);
      // Find User
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({
          sucess: false,
          message: "User already exists",
        });
      }
      // Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new UserModel({
        username: username,
        email: email,
        password: hashedPassword,
      });
      await newUser.save();
      return res.status(201).json({ message: "User created" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  editUser: async (req, res) => {
    try {
      const { id } = req.params;
      const newUser = req.body;
      const editeUser = await Recipe.findByIdAndUpdate(id, newUser, {
        new: true,
      });

      return res.status(200).json(editeUser);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
export default userController;
