-- CreateTable
CREATE TABLE "PedidoLocal" (
    "id" TEXT NOT NULL,
    "tipoConsumo" TEXT NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,
    "itemsPedido" TEXT NOT NULL,
    "metodoPagamento" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "numeroMesa" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userPhone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PedidoLocal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PedidoCasa" (
    "id" TEXT NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,
    "itemsPedido" TEXT NOT NULL,
    "metodoPagamento" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userPhone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PedidoCasa_pkey" PRIMARY KEY ("id")
);
