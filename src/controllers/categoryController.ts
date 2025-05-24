import { Request, Response } from "express"
import { prisma } from '../database/client.js'
import { generateUniqueSlug } from '../utils/slug.js'
import { Prisma } from "../../generated/prisma/index.js"

export const listAllCategories = async (req: Request, res: Response) => {
    const categories = await prisma.category.findMany()

    res.status(200).json(categories)
}

export const listCategoryById = async (req: Request, res: Response) => {
    const categoryId = Number(req.params.categoryId)
    if (isNaN(categoryId)) {
        res.status(400).json({ error: 'ID de categoria inválido.' })
        return
    }
    const category = await prisma.category.findUnique({ where: { id: categoryId } })
    if (!category) {
        res.status(404).json({ error: 'ID de categoria inválido.' })
        return
    }
    return res.status(200).json(category)
}

export const createCategory = async (req: Request, res: Response) => {
    const { title, description } = req.body
    const slug = await generateUniqueSlug(title)

    await prisma.category.create({
        data: {
            //no futuro seria interessante trocar o trim() por uma função de limpeza mais robusta
            //mas para fins acadêmicos creio que seja suficiente
            title: title.trim(),
            description,
            slug
        }
    })
    res.status(201).json({message: 'Categoria criada com sucesso.'})
}

export const updateCategory = async (req: Request, res: Response) => {
    const categoryId = Number(req.params.categoryId);

    if (isNaN(categoryId)) {
        return res.status(400).json({ error: 'ID de categoria inválido.' });
    }

    const { title, description } = req.body;

    const existingCategory = await prisma.category.findUnique({
        where: { id: categoryId },
    });

    if (!existingCategory) {
        res.status(404).json({ error: 'Categoria não encontrada.' });
        return
    }

    let slug
    if (title.trim() !== existingCategory.title) {
        slug = await generateUniqueSlug(title) // Assume this returns a string
    }
    //Prisma.skip é uma preview feature que substitui o undefined, serve para não atualizar campos
    const updatedCategory = await prisma.category.update({
        where: { id: categoryId },
        data: {
            title: title.trim() ?? Prisma.skip,
            description: description ?? Prisma.skip,
            slug: slug ?? Prisma.skip
        }
    });

    res.status(200).json(updatedCategory);
};

export const deleteCategory = async (req: Request, res: Response) => {
    const categoryId = Number(req.params.categoryId)

    if (isNaN(categoryId)) {
        res.status(400).json({ error: 'ID de categoria inválido' })
        return
    }

    prisma.category.delete({ where: { id: categoryId } })

    res.status(200).json({ message: 'Categoria removida com sucesso' })
}