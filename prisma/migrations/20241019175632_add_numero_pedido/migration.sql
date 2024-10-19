/*
  Warnings:

  - A unique constraint covering the columns `[numeroPedido]` on the table `PedidoCasa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroPedido]` on the table `PedidoLocal` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PedidoCasa" ADD COLUMN     "numeroPedido" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "PedidoLocal" ADD COLUMN     "numeroPedido" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PedidoCasa_numeroPedido_key" ON "PedidoCasa"("numeroPedido");

-- CreateIndex
CREATE UNIQUE INDEX "PedidoLocal_numeroPedido_key" ON "PedidoLocal"("numeroPedido");
