/*
  Warnings:

  - You are about to drop the column `userId` on the `PedidoCasa` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `PedidoLocal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PedidoCasa" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "PedidoLocal" DROP COLUMN "userId";
