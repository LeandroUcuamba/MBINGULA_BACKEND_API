import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export const createPedidoCasa = async (req: Request, res: Response) => {
    try {
      const {
        valorTotal,
        itemsPedido,
        metodoPagamento,
        status
      } = req.body;

      const { id } = req.user;

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
  
      const pedidoCasa = await prisma.pedidoCasa.create({
        data: {
           valorTotal,
           itemsPedido,
           metodoPagamento,
           status,
           userName: user!.name,
           userPhone: user!.phone!
        },
      });
  
      return res.status(200).json(pedidoCasa);
    } catch (error) {
      return res.status(400).json(error);
    }
};

export const getAllPedidoCasa = async (req: Request, res: Response) => {
  try {
    const pedidoCasa = await prisma.pedidoCasa.findMany();

    return res.json(pedidoCasa);

    if (!pedidoCasa) {
      return res.status(204);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updatePedidoCasa = async (req: Request, res: Response) => {
  try {
    const pedidoCasaId = req.params.id;
    const {
        valorTotal,
        itemsPedido,
        metodoPagamento,
        status
    } = req.body;

    const { id } = req.user;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    await prisma.pedidoCasa.update({
      where: {
        id: pedidoCasaId,
      },
      data: {
        valorTotal,
        itemsPedido,
        metodoPagamento,
        status,
        userName: user!.name,
        userPhone: user!.phone!
      },
    });

    return res.json({ message: "Pedido Atualizado com sucesso!" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deletePedidoCasa = async (req: Request, res: Response) => {
    try {
      const pedidoCasaId = req.params.id;
  
      await prisma.pedidoCasa.delete({
        where: {
          id: pedidoCasaId,
        },
      });
  
      return res.json({ message: "Pedido removido com sucesso!" });
    } catch (error) {
      return res.status(400).json(error);
    }
};

export const getPedidoCasaByUserName = async (req: Request, res: Response) => {
  try {
    const userName = req.params.userName;

    const pedidoCasa = await prisma.pedidoCasa.findMany({
      where: {
        userName: {
          contains: userName,
        },
      },
    });

    if (!pedidoCasa) {
      return res.status(204);
    }

    return res.status(200).json(pedidoCasa);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getPedidoCasaByUserPhone = async (req: Request, res: Response) => {
  try {
    const userPhone = req.params.userPhone;

    const pedidoCasa = await prisma.pedidoCasa.findMany({
      where: {
        userName: {
          contains: userPhone,
        },
      },
    });

    if (!pedidoCasa) {
      return res.status(204);
    }

    return res.status(200).json(pedidoCasa);
  } catch (error) {
    return res.status(400).json(error);
  }
};