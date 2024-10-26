import { catchAsyncError } from "../../../middlewares/catchAsyncError.js";
import { prisma } from "../../../prisma/client.js";
import { redisClient } from "../../../config/redis.config.js";
import cloudinary from "cloudinary";
import {
  addressSchema,
  avatarSchema,
  generalInfoSchema,
  socialLinksSchema,
} from "./profile.validator.js";
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

export const updateGeneralInfo = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;

  const { firstName, lastName, email, mobile, about, thought, experience } =
    req.body;

  await generalInfoSchema.validate({
    firstName,
    lastName,
    email,
    mobile,
    about,
    thought,
    experience,
  });

  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      firstName,
      lastName,
      email,
      mobile,
      about,
      thought,
      experience,
    },
  });

  res.status(200).json({
    success: true,
    message: "General Info Updated Successfully!",
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

export const getAddress = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;
  const address = await prisma.address.findFirst({
    where: {
      userId: id,
    },
  });

  res.status(200).json({
    success: true,
    address,
  });
});

export const updateAddress = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;
  const { street, city, state, postalCode, country } = req.body;

  await addressSchema.validate({ street, city, state, postalCode, country });

  await prisma.address.upsert({
    where: {
      userId: id,
    },
    update: {
      street,
      city,
      state,
      postalCode,
      country,
    },
    create: {
      userId: id, // Include the id if it's part of the creation data
      street,
      city,
      state,
      postalCode,
      country,
    },
  });

  res.status(200).json({
    success: true,
    message: "Address Updated Successfully!",
  });
});

export const getSocialLinks = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;

  const socialLinks = await prisma.socialLinks.findFirst({
    where: {
      userId: id,
    },
  });

  res.status(200).json({
    success: true,
    socialLinks,
  });
});

export const updateSocialLinks = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;
  const { linkedin, github, facebook, twitter, instagram, youtube } = req.body;

  await socialLinksSchema.validate({
    linkedin,
    github,
    facebook,
    twitter,
    instagram,
    youtube,
  });

  await prisma.socialLinks.upsert({
    where: {
      userId: id,
    },
    update: {
      linkedin,
      github,
      facebook,
      twitter,
      instagram,
      youtube,
    },
    create: {
      userId: id, // Include the id if it's part of the creation data
      linkedin,
      github,
      facebook,
      twitter,
      instagram,
      youtube,
    },
  });

  res.status(200).json({
    success: true,
    message: "Social Links Updated Successfully!",
  });
});
