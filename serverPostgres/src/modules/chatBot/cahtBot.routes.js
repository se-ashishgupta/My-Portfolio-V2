import express from "express";
import { chatWithBot } from "./chatBot.controller.js";

const router = express.Router();

router.route("/chatbot").post(chatWithBot);

export default router;
