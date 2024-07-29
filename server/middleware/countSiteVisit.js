import { DashboardStats } from "../models/dashboardStats.js";
import { catchAsyncError } from "../utils/catchAsyncError.js";

const countSiteVisit = catchAsyncError(async (req, res, next) => {
  await DashboardStats.findOneAndUpdate(
    {},
    { $inc: { views: 1 } },
    { new: true, upsert: true }
  );
  next();
});

export default countSiteVisit;
