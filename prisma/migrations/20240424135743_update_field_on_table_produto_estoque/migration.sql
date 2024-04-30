/*
  Warnings:

  - You are about to drop the column `qtd_entrada` on the `Estoque` table. All the data in the column will be lost.
  - You are about to drop the column `qtd_saida` on the `Estoque` table. All the data in the column will be lost.
  - You are about to drop the column `qtd_total` on the `Estoque` table. All the data in the column will be lost.
  - Added the required column `quantidade` to the `Estoque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidade` to the `Estoque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estoque" DROP COLUMN "qtd_entrada",
DROP COLUMN "qtd_saida",
DROP COLUMN "qtd_total",
ADD COLUMN     "quantidade" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "unidade" TEXT NOT NULL;
