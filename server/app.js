import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middleware/error.js";

// ENV file Configration
config();

export const app = express();

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Import Routes
import user from "./routes/user.js";
app.use("/api/v1", user);

app.use(ErrorMiddleware);
