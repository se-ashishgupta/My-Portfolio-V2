import express from "express";
import {
  deleteAvatar,
  getGeneralInfo,
  updateAvatar,
} from "./profile.controller.js";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";
import configureMulterUpload from "../../../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/generalInfo").get(authMiddleware, getGeneralInfo);
router
  .route("/updateavatar")
  .put(authMiddleware, configureMulterUpload("single", "file"), updateAvatar);
router.route("/deleteavatar").delete(authMiddleware, deleteAvatar);

export default router;
