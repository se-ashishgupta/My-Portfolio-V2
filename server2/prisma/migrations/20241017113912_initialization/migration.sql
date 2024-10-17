-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetPasswordExpire" TEXT,
ADD COLUMN     "resetPasswordToken" TEXT;
