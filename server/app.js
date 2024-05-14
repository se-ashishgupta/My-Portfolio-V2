import express from "express";

import ErrorMiddleware from "./middleware/error.js";

// ENV file Configration
import "dotenv/config";

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

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome, Website is Working on ${process.env.FRONTEND_URL} click <a href=${process.env.FRONTEND_URL}>here</a></h1>`
  );
});

app.use(ErrorMiddleware);
