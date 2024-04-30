-- CreateTable
CREATE TABLE "Estoque" (
    "id" TEXT NOT NULL,
    "qtd_entrada" DECIMAL(65,30) NOT NULL,
    "qtd_saida" DECIMAL(65,30) NOT NULL,
    "qtd_total" DECIMAL(65,30) NOT NULL,
    "produtoId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Estoque" ADD CONSTRAINT "Estoque_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
