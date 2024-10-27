import express from "express";
import { getPortfolio } from "./portfolio.controller.js";
import { viewsMiddleware } from "../../middlewares/views.middleware.js";

const router = express.Router();

router.route("/getportfolio").get(viewsMiddleware, getPortfolio);

export default router;
