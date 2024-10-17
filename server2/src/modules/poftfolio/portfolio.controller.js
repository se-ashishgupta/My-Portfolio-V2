import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import { prisma } from "../../prisma/client.js";

export const getPortfolio = catchAsyncError(async (req, res, next) => {
  const user = await prisma.user.findFirst({
    where: {
      email: process.env.ADMIN_EMAIL,
    },
    omit: {
      password: true,
    },
    include: {
      avatar: true,
      titles: true,
      socialLinks: true,
    },
  });

  res.status(200).json({
    success: true,
    poftfolio: user,
  });
});
