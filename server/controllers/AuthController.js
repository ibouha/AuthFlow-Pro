/* eslint-disable no-undef */
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

const AuthController = {
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const findUser = await UserModel.findOne({ email: email });
      if (!findUser) {
        return res.status(400).json({ message: "password or email was wrong" });
      }
      const passwordMatch = await bcrypt.compare(password, findUser.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "password or email was wrong" });
      }
      // Your secret key to sign the token
      const secretKey = process.env.SECRET_KEY;

      // Payload data to be included in the token
      const payload = {
        userId: findUser._id,
      };

      // Options for the token (optional)
      const options = {
        expiresIn: "1h", // Token expiration time
      };

      // Create the JWT token
      const token = jwt.sign(payload, secretKey, options);

      res.cookie("accesToken", token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60),
        httpOnly: true,
        smaeSite: "lax",
      });

      res.status(200).json({
        success: true,
        data: findUser,
        token,
        message: "Login successfully",
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  Logout: async () => {},
};

export default AuthController;
