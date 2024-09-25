import express from "express";
import { chatBot } from "../controllers/chat.js";
const router = express.Router();

router.route("/chat").post(chatBot);

export default router;
