/*
  Warnings:

  - You are about to drop the column `Tipo` on the `servicorestaurante` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `servicorestaurante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "servicorestaurante" DROP COLUMN "Tipo",
ADD COLUMN     "tipo" TEXT NOT NULL;
