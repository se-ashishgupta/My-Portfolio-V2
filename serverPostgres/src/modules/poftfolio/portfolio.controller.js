import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import { prisma } from "../../prisma/client.js";
import { redisClient } from "../../config/redis.config.js";

export const getPortfolio = catchAsyncError(async (req, res, next) => {
  const cached = await redisClient.get("portfolioData");
  if (!cached) {
    console.log("From Redis");

    return res.status(200).json({
      success: true,
      poftfolio: JSON.parse(cached),
    });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: process.env.ADMIN_EMAIL,
    },
    omit: {
      password: true,
    },
    include: {
      avatar: true,
      address: true,
      titles: true,
      socialLinks: true,
    },
  });

  await redisClient.set("portfolioData", JSON.stringify(user));

  res.status(200).json({
    success: true,
    poftfolio: user,
  });
});
