/*
  Warnings:

  - Changed the type of `numeroMesa` on the `PedidoLocal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PedidoLocal" DROP COLUMN "numeroMesa",
ADD COLUMN     "numeroMesa" INTEGER NOT NULL;
