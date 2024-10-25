import { catchAsyncError } from "../../../middlewares/catchAsyncError.js";
import { prisma } from "../../../prisma/client.js";
import { redisClient } from "../../../config/redis.config.js";
import cloudinary from "cloudinary";
import { avatarSchema } from "./profile.validator.js";
import getDataUri from "../../../utils/dataUri.utils.js";

export const getGeneralInfo = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;
  const generalInfo = await prisma.user.findFirst({
    where: {
      id: id,
    },
    omit: {
      password: true,
    },
    include: {
      avatar: true,
    },
  });

  res.status(200).json({
    success: true,
    generalInfo,
  });
});

export const updateAvatar = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;
  const file = req.file;

  await avatarSchema.validate({ file });

  const avatar = await prisma.avatar.findFirst({
    where: {
      userId: id,
    },
  });

  if (avatar) await cloudinary.v2.uploader.destroy(avatar.publicId);

  const fileUri = getDataUri(file);
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    folder: `PortfolioV2/avatar`,
  });

  await prisma.avatar.upsert({
    where: {
      userId: id,
    },
    update: {
      publicId: myCloud.public_id,
      url: myCloud.secure_url,
    },
    create: {
      userId: id, // Include the id if it's part of the creation data
      publicId: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "Profile Image Updated Successfully!",
  });
});

export const deleteAvatar = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;

  const avatar = await prisma.avatar.findFirst({
    where: {
      userId: id,
    },
  });

  if (avatar) {
    await cloudinary.v2.uploader.destroy(avatar.publicId);
    await prisma.avatar.delete({
      where: {
        userId: id,
      },
    });
  }

  res.status(200).json({
    success: true,
    message: "Profile Image Deleted Successfully!",
  });
});
