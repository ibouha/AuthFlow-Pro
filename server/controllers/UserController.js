import UserModel from "../models/UserModel.js";

const userController = {
  Register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({
          sucess: false,
          message: "User already exists",
        });
      }
      const newUser = new UserModel({
        name: name,
        email: email,
        password: password,
      });
      await newUser.save();
      return res.status(201).json({ message: "User created" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const existingUser = await UserModel.findOne({ email: email });
      if (!existingUser) {
        return res.status(400).json({ message: "User does not exist" });
      }
      if (existingUser.password !== password) {
        return res.status(400).json({ message: "Invalid password" });
      }
      return res.status(200).json({ message: "Login successful" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  Logout: async () => {},
};
export default userController;
