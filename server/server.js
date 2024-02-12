/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import RoleRouter from "./routes/RoleRoutes.js";
import UserRouter from "./routes/UserRoutes.js";
env.config();

const app = express();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
  })
);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/role", RoleRouter);
app.use("/api/users", UserRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`server listening on port ${port}`));
