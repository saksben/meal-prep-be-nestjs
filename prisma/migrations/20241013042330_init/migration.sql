/*
  Warnings:

  - You are about to drop the column `goalId` on the `MealPlan` table. All the data in the column will be lost.
  - You are about to drop the column `goalId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Goal` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `calories` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbohydrates` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_userId_fkey";

-- DropForeignKey
ALTER TABLE "MealPlan" DROP CONSTRAINT "MealPlan_goalId_fkey";

-- AlterTable
ALTER TABLE "MealPlan" DROP COLUMN "goalId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "goalId",
ADD COLUMN     "calories" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Goal";
