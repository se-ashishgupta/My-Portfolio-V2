import express from "express";
import "dotenv/config";
import limiter from "./middlewares/rateLimiter.middleware.js";
import { ErrorMiddleware } from "./middlewares/error.middleware.js";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

export const app = express();

app.use(morgan("dev"));
app.use(helmet()); // Add helmet middleware for securing HTTP headers
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(limiter); // Apply rate limiting middleware to all requests

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Import Routes
import authRoutes from "./modules/admin/auth/auth.routes.js";
import portfolioRoute from "./modules/poftfolio/portfolio.routes.js";
import chatBotRoute from "./modules/chatBot/cahtBot.routes.js";
import profileRoutes from "./modules/admin/profile/profile.routes.js";

app.use("/api/v2", portfolioRoute);
app.use("/api/v2", chatBotRoute);

// Admin
app.use("/api/v2", authRoutes);
app.use("/api/v2/admin", profileRoutes);

app.get("/", (req, res, next) => {
  return res.send("Server is Running Healthy");
});

app.use(ErrorMiddleware);
