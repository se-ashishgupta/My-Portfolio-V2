import express from "express";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";
import { getDashboardStats } from "./dashboard.controller.js";

const router = express.Router();

router.route("/dashboardstats").get(authMiddleware, getDashboardStats);

export default router;
