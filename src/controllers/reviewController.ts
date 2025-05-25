import { Request, Response } from "express"
import { prisma } from "../database/client.js"
import { Prisma } from "../../generated/prisma/index.js"

export const listReviewsByProduct = async (req: Request, res: Response) => {
    const productId = Number(req.params.productId)

    if (isNaN(productId)) {
        res.status(400).json({ error: "ID de produto inválido." })
        return
    }

    const reviews = await prisma.review.findMany({
        where: { productId },
        orderBy: { createdAt: "desc" }
    })

    res.status(200).json(reviews)
}

export const listReviewsByUser = async (req: Request, res: Response) => {
    const userCPF = req.params.userCpf

    const user = await prisma.user.findUnique({ where: { cpf: userCPF } })
    if (!user) {
        res.status(404).json({ error: "Usuário não encontrado." })
        return
    }

    const reviews = await prisma.review.findMany({
        where: { userCPF },
        orderBy: { createdAt: "desc" }
    })

    res.status(200).json(reviews)
}

// POST /reviews
export const createReview = async (req: Request, res: Response) => {
    const { title, message, rating, userCPF, productId } = req.body

    if (!title || !message || !rating || !userCPF || !productId) {
        res.status(400).json({ error: "Campos obrigatórios ausentes." })
        return
    }

    const review = await prisma.review.create({
        data: {
            title,
            message,
            rating,
            userCPF,
            productId
        },
    })

    res.status(201).json(review)
}

// PUT /reviews/:id
export const updateReview = async (req: Request, res: Response) => {
    const reviewId = Number(req.params.id)

    if (isNaN(reviewId)) {
        res.status(400).json({ error: "ID inválido." })
        return
    }

    const { title, message, rating } = req.body

    const updated = await prisma.review.update({
        where: { id: reviewId },
        data: {
            title: title ?? Prisma.skip,
            message: message ?? Prisma.skip,
            rating: rating ?? Prisma.skip
        },
    })

    res.status(200).json(updated)
}

export const deleteReview = async (req: Request, res: Response) => {
    const reviewId = Number(req.params.id)

    if (isNaN(reviewId)) {
        res.status(400).json({ error: "ID inválido." })
        return
    }

    await prisma.review.delete({ where: { id: reviewId } })

    res.status(200).json({ message: "Review removido com sucesso." })
}
