import express from "express";
import "dotenv/config";
import ErrorMiddleware from "./middleware/error.js";
import bodyParser from "body-parser";
import cors from "cors";

export const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//Import Routes
import user from "./routes/user.js";
import chatBot from "./routes/chat.js";
import ErrorHandler from "./utils/errorHandler.js";
app.use("/api/v1", user);
app.use("/api/v1", chatBot);

// Home Route
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome, Website is Working on ${process.env.FRONTEND_URL} click <a href=${process.env.FRONTEND_URL}>here</a></h1>`
  );
});

// This middleware function is designed to handle any requests that don't match any defined routes
app.use((req, res, next) => {
  const error = new ErrorHandler("Not Found", 404);
  next(error);
});

// Error Middleware
app.use(ErrorMiddleware);
