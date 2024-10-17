import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(
      `Having some issues with Database connection. Please review this error and then try again : `,
      error
    );
  }
};
