import { catchAsyncError } from "../../../middlewares/catchAsyncError.js";
import { prisma } from "../../../prisma/client.js";
import ErrorHandler from "../../../utils/error.utils.js";
import { loginSchema, registerSchema } from "./auth.validator.js";
import getDataUri from "../../../utils/dataUri.utils.js";
import cloudinary from "cloudinary";
import { sendToken } from "../../../utils/sendToken.utils.js";
import bcrypt from "bcrypt";

export const register = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, mobile, password } = req.body;
  const file = req.file;

  await registerSchema.validate({
    firstName,
    lastName,
    email,
    mobile,
    password,
    file,
  });

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return next(
      new ErrorHandler(
        "User Already Exist, Please try with deifferemt email.",
        400
      )
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const fileUri = getDataUri(file);
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    folder: `PortfolioV2/avatar`,
  });

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
    },
  });

  // Create a new avatar record
  await prisma.avatar.create({
    data: {
      publicId: myCloud.public_id, // Ensure this maps correctly to your schema
      url: myCloud.secure_url,
      userId: user.id,
    },
  });

  sendToken(res, user, "Registered Successfully", 201);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  await loginSchema.validate({
    email,
    password,
  });

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) {
    return next(
      new ErrorHandler("User Not Exist, Please register first.", 400)
    );
  }

  const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid email or password.", 401));
  }

  sendToken(res, existingUser, "LogedIn Successfully", 200);
});

export const protectedAuth = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "You are authenticated",
  });
});
