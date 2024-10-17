/*
  Warnings:

  - You are about to drop the column `link` on the `SocialLinks` table. All the data in the column will be lost.
  - Added the required column `facebook` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `github` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitter` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtube` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SocialLinks" DROP COLUMN "link",
ADD COLUMN     "facebook" TEXT NOT NULL,
ADD COLUMN     "github" TEXT NOT NULL,
ADD COLUMN     "instagram" TEXT NOT NULL,
ADD COLUMN     "linkedin" TEXT NOT NULL,
ADD COLUMN     "twitter" TEXT NOT NULL,
ADD COLUMN     "youtube" TEXT NOT NULL;
