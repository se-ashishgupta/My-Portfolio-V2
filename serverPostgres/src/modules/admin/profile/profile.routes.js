import express from "express";
import {
  deleteAvatar,
  getAddress,
  getGeneralInfo,
  updateAddress,
  updateAvatar,
  updateGeneralInfo,
} from "./profile.controller.js";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";
import configureMulterUpload from "../../../middlewares/multer.middleware.js";

const router = express.Router();

router
  .route("/generalInfo")
  .get(authMiddleware, getGeneralInfo)
  .put(authMiddleware, updateGeneralInfo);

router
  .route("/avatar")
  .put(authMiddleware, configureMulterUpload("single", "file"), updateAvatar)
  .delete(authMiddleware, deleteAvatar);

router
  .route("/address")
  .get(authMiddleware, getAddress)
  .put(authMiddleware, updateAddress);

export default router;
