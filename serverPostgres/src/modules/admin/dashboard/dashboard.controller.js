import { catchAsyncError } from "../../../middlewares/catchAsyncError.js";
import { prisma } from "../../../prisma/client.js";
import { redisClient } from "../../../config/redis.config.js";

export const getDashboardStats = catchAsyncError(async (req, res, next) => {
  const { id } = req.user;

  const dashboardStats = await prisma.dashboardStats.findFirst({
    where: {
      userId: id,
    },
  });

  res.status(200).json({
    success: true,
    dashboardStats,
  });
});
