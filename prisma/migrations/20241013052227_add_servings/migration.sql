/*
  Warnings:

  - You are about to drop the column `name` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `Ingredient` table. All the data in the column will be lost.
  - Added the required column `servings` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "name",
DROP COLUMN "unit",
ADD COLUMN     "servings" JSONB NOT NULL;
