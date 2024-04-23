import express from "express";
import { getUserDetails, login, register } from "../controllers/user.js";
import configureMulterUpload from "../middleware/multer.js";
import { requireAuthentication } from "../middleware/authentication.js";

const router = express.Router();

router
  .route("/register")
  .post(configureMulterUpload("single", "file"), register);
router.route("/login").post(login);
router.route("/getuserdetails").get(getUserDetails);

export default router;
