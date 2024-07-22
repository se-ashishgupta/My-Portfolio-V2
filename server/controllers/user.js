import { User } from "../models/user.js";
import { catchAsyncError } from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";
import { sendToken } from "../utils/sendToken.js";
import { updateUserSchema } from "../constant/validation.js";
console.log(process.env.PORT);

export const register = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, mobile, password } = req.body;
  const file = req.file;

  if (!firstName || !lastName || !email || !mobile || !password || !file)
    return next(new ErrorHandler("Please enter all fields", 400));

  if (password.length < 6)
    return next(
      new ErrorHandler("Password must be at least 6 characters", 400)
    );

  let user = await User.findOne({ email });

  if (user)
    return next(new ErrorHandler("User already exist, Please login now", 400));

  const fileUri = getDataUri(file);
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    folder: `PortfolioV2/users/avatar`,
  });

  user = await User.create({
    firstName,
    lastName,
    email,
    mobile,
    password,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  sendToken(res, user, "Registered Successfully", 201);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter all fields!", 400));

  let user = await User.findOne({ email }).select("+password");

  if (!user)
    return next(
      new ErrorHandler("User not registered, Please Register now first!", 404)
    );

  const isMatch = await user.comparePassword(password);

  console.log(isMatch);

  if (!isMatch) return next(new ErrorHandler("Invalid email or password", 401));

  sendToken(res, user, `Welcome back ${user.firstName}`, 200);
});

export const getUserDetails = catchAsyncError(async (req, res, next) => {
  let user = await User.findOne();

  res.status(200).json({
    success: true,
    user,
  });
});

export const updateUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) return next(new ErrorHandler("User not found", 400));

  const { error, value } = updateUserSchema.validate({
    ...req.body,
    file: req.file,
  });

  const {
    firstName,
    lastName,
    email,
    mobile,
    titles,
    about,
    thought,
    address,
    socialLinks,
    file,
  } = value;

  if (error) {
    return next(new ErrorHandler(error.details[0].message, 400));
  }

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (email) user.email = email;
  if (mobile) user.mobile = mobile;
  if (titles) user.titles = titles;
  if (about) user.about = about;
  if (thought) user.thought = thought;
  if (address) user.address = address;
  if (socialLinks) user.socialLinks = socialLinks;
  if (file) {
    const fileUri = getDataUri(file);
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
      folder: `PortfolioV2/users/avatar`,
    });

    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    user.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Update Sucessfully",
  });
});
