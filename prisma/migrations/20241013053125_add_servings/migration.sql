/*
  Warnings:

  - Added the required column `defaultAmount` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defaultUnit` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "defaultAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "defaultUnit" TEXT NOT NULL;
