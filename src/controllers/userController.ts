import { Response, Request } from 'express'
import { prisma } from '../database/client.js'
import { createCart } from '../repositories/cartRepository.js'

export const registerUser = async (res: Response, req: Request) => {
    const { cpf, nome, dataDeNascimento } = req.body
    await prisma.user.create({
        data: {
            cpf,
            nome,
            dataDeNascimento,
            //criar carrinho junto com 
            cart: {
                create: {}//não precisa especificar foreign key(userCPF na tabela cart)
            }
        }
    })
    res.status(200).json({message: 'Usuario criado com sucesso.'})
}

