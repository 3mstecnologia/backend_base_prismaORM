import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CategoriaController {
  async criar(request: Request, response: Response) {
    const { categoria_enviada } = request.body;

    const categoria = await prismaClient.categoria.create({
      data: {
        categoria: categoria_enviada,
      },
    });

    return response.json(categoria);
  }

  async listar(request: Request, response: Response) {
    const categorias = await prismaClient.categoria.findMany();

    return response.json(categorias);
  }

  async ListarUma(request: Request, response: Response) {
    const { categoria_enviada } = request.body;

    const categoria = await prismaClient.categoria.findUnique({
      where: {
        categoria: categoria_enviada,
      },
    });

    return response.json(categoria);
  }
}
