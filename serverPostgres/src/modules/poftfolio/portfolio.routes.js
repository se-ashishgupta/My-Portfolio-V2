import express from "express";
import { getPortfolio } from "./portfolio.controller.js";
import { viewsMiddleware } from "../../middlewares/views.middleware.js";
import { visitorsMiddleware } from "../../middlewares/visitors.middleware.js";

const router = express.Router();

router
  .route("/getportfolio")
  .get(viewsMiddleware, visitorsMiddleware, getPortfolio);

export default router;
