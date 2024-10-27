import { redisClient } from "../config/redis.config.js";
import { prisma } from "../prisma/client.js";
import ErrorHandler from "../utils/error.utils.js";

export const visitorsMiddleware = async (req, res, next) => {
  try {
    const visitorIP = req.ip;
    const isUniqueVisitor = await redisClient.sAdd("uniqueVisitors", visitorIP);

    if (!isUniqueVisitor) {
      let adminUserId = await redisClient.get("adminUserId");

      if (!adminUserId) {
        const user = await prisma.user.findFirst({
          where: {
            email: process.env.ADMIN_EMAIL,
          },
        });

        if (user) {
          adminUserId = user.id;
          await redisClient.set("adminUserId", adminUserId);
        } else {
          return next(new ErrorHandler("Admin user not found", 400));
        }
      }

      await prisma.dashboardStats.upsert({
        where: {
          userId: +adminUserId,
        },
        create: {
          userId: +adminUserId,
          views: 1,
        },
        update: {
          visitorsCount: { increment: 1 },
        },
      });
    }

    next();
  } catch (error) {
    return next(new ErrorHandler("Internal Server Error", 500));
  }
};
