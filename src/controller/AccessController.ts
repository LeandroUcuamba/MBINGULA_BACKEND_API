import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export const createAccess = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const access = await prisma.access.create({
      data: { name },
    });

    return res.json(access);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getAllAccessess = async (req: Request, res: Response) => {
  try {
    const accessess = await prisma.access.findMany();
    return res.json(accessess);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteAccess = async (req: Request, res: Response) => {
  try {
    const accessId = req.params.id;

    await prisma.access.delete({
      where: {
        id: accessId,
      },
    });

    return res.json({ message: "Acesso deletado!" });
  } catch (error) {
    return res.status(400).json(error);
  }
};