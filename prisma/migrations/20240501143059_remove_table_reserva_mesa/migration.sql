/*
  Warnings:

  - You are about to drop the `ReservaMesa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReservaMesa" DROP CONSTRAINT "ReservaMesa_mesaId_fkey";

-- AlterTable
CREATE SEQUENCE mesa_numero_seq;
ALTER TABLE "Mesa" ADD COLUMN     "dataReserva" TEXT,
ADD COLUMN     "nome_cliente" TEXT,
ADD COLUMN     "qtd_pessoa" TEXT,
ADD COLUMN     "tel_cliente" TEXT,
ALTER COLUMN "numero" SET DEFAULT nextval('mesa_numero_seq');
ALTER SEQUENCE mesa_numero_seq OWNED BY "Mesa"."numero";

-- DropTable
DROP TABLE "ReservaMesa";
