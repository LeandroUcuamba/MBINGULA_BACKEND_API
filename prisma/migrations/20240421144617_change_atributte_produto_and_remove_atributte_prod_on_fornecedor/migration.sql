/*
  Warnings:

  - You are about to drop the column `produto` on the `Fornecedor` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fornecedor" DROP COLUMN "produto";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "tipo",
ADD COLUMN     "nome" TEXT NOT NULL;
