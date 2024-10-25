import express from "express";
import { login, protectedAuth, register } from "./auth.controller.js";
import configureMulterUpload from "../../../middlewares/multer.middleware.js";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/register")
  .post(configureMulterUpload("single", "file"), register);
router.route("/login").post(login);
router.route("/protected").get(authMiddleware, protectedAuth);

export default router;
