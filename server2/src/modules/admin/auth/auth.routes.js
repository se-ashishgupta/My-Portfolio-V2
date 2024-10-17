import express from "express";
import { login, register } from "./auth.controller.js";
import configureMulterUpload from "../../../middlewares/multer.middleware.js";

const router = express.Router();

router
  .route("/register")
  .post(configureMulterUpload("single", "file"), register);
router.route("/login").post(login);

export default router;
