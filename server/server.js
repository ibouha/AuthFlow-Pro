/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import cookieParser from "cookie-parser";
import RoleRouter from "./routes/RoleRoutes.js";
import UserRouter from "./routes/UserRoutes.js";
import PermissionRouter from "./routes/PermissionRoutes.js";
import AuthRouter from "./routes/AuthRoute.js";
import verfyToken from "./middlewares/verifyToken.js";
env.config();

const app = express();

//middlewares
app.use(cookieParser());
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/api/role", RoleRouter);
app.use("/api/users", UserRouter);
app.use(
  "/api/permission",
  verfyToken.cheakToken,
  verfyToken.cheakPermission,
  PermissionRouter
);
app.use("/api/auth", AuthRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`server listening on port 3020`));
