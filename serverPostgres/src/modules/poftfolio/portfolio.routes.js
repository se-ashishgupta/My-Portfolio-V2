import express from "express";
import { getPortfolio } from "./portfolio.controller.js";

const router = express.Router();

router.route("/getportfolio").get(getPortfolio);

export default router;
