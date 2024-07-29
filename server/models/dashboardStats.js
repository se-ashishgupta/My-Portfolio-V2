import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export const DashboardStats = mongoose.model("DashboardStats", schema);
