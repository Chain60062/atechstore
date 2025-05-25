import { prisma } from '../database/client.js'
import { Prisma } from '../../generated/prisma/index.js';
import { Request, Response } from 'express'

export const getAllProducts = async (_req: Request, res: Response) => {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
    });
    if (!product) {
        res.status(404).json({ error: 'Produto não encontrado.' })
        return
    }
    res.status(200).json(product);
};

export const getProductsByCategoryId = async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    const products = await prisma.product.findMany({
        where: { categoryId: parseInt(categoryId) },
    });

    res.status(200).json(products);
};

export const createProduct = async (req: Request, res: Response) => {
    const {
        productName,
        price,
        description,
        sku,
        availableUnits,
        slug,
        categoryId,
    } = req.body;

    if (!productName || !price || !slug || availableUnits == null) {
        res.status(400).json({ error: "Faltam campos obrigatórios." });
        return;
    }

    try {
        const product = await prisma.product.create({
            data: {
                productName,
                price,
                description,
                sku,
                availableUnits,
                slug,
                categoryId,
            },
        });

        res.status(201).json(product);
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2003"
        ) {
            res.status(400).json({ error: "Categoria informada não existe." });
        } else {
            console.error(error);
            res.status(500).json({ error: "Erro ao criar produto." });
        }
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await prisma.product.update({
        where: { id: parseInt(id) },
        data: req.body,
    });

    res.status(200).json(product);
};


export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.product.delete({
            where: { id: parseInt(id) },
        });

        res.status(204).send();
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            res.status(404).json({ error: "Produto não encontrado." });
        } else {
            console.error(error);
            res.status(500).json({ error: "Erro ao deletar produto." });
        }
    }
};