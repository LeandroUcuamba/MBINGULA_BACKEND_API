/*
  Warnings:

  - Changed the type of `lugares` on the `Mesa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Mesa" DROP COLUMN "lugares",
ADD COLUMN     "lugares" INTEGER NOT NULL;
