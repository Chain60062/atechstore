import { Response, Request } from 'express'
import { prisma } from '../database/client.js'

export const registerUser = async (res: Response, req: Request) => {
    const { cpf, nome, dataDeNascimento } = req.body
    await prisma.user.create({
        data: {
            cpf,
            nome,
            dataDeNascimento
        }
    })
}
