import express from "express";
// ENV file Configration
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
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
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
