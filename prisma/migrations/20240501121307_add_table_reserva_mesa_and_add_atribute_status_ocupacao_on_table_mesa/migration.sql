-- AlterTable
ALTER TABLE "Mesa" ADD COLUMN     "statusOcupacao" TEXT;

-- CreateTable
CREATE TABLE "ReservaMesa" (
    "id" TEXT NOT NULL,
    "qtd_pessoa" TEXT NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "tel_cliente" TEXT NOT NULL,
    "email_cliente" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "mesaId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReservaMesa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReservaMesa" ADD CONSTRAINT "ReservaMesa_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "Mesa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
