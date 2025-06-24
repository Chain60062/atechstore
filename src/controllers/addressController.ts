import { Request, Response } from "express"
import { prisma } from '../database/client.js'
import { Prisma } from "../../generated/prisma/index.js"

export const listUserAddressesByUserCpf = async (req: Request, res: Response) => {
    const userCPF = req.params.userId

    const user = await prisma.user.findUnique({ where: { cpf: userCPF } })
    if (!user) {
        res.status(404).json({ error: 'Usuário não encontrado' })
        return
    }

    const addresses = await prisma.address.findMany({ where: { userCPF } })
    if (!addresses) {
        res.status(404).json({ error: 'Nenhum endereço encontrado.' })
        return
    }
    res.status(200).json(addresses)
}

export const createAddress = async (req: Request, res: Response) => {
    const { cep, stateCode, city, neighborhood, street, number, additionalDetails, userCPF } = req.body

    if (isNaN(Number(number))) {
        res.status(400).json({ error: 'Número em formato incorreto' })
        return
    }
    
    await prisma.address.create({
        data: {
            cep,
            city,
            stateCode,
            neighborhood,
            street,
            number: Number(number),
            additionalDetails,
            userCPF
        }
    })
    res.status(201).json({ message: 'Endereço criado com sucesso.' })
}

export const updateAddress = async (req: Request, res: Response) => {
    const addressId = Number(req.params.id);

    if (isNaN(addressId)) {
        res.status(400).json({ error: 'ID de categoria inválido.' });
        return
    }

    const { cep, stateCode, city, neighborhood, street, number, additionalDetails, userCPF } = req.body

    //Prisma.skip é uma preview feature que substitui o undefined, serve para não atualizar campos
    const updatedAddress = await prisma.address.update({
        where: { id: addressId },
        data: {
            cep: cep ?? Prisma.skip,
            stateCode: stateCode ?? Prisma.skip,
            city: city ?? Prisma.skip,
            neighborhood: neighborhood ?? Prisma.skip,
            street: street ?? Prisma.skip,
            number: number ?? Prisma.skip,
            additionalDetails: additionalDetails ?? Prisma.skip,
            userCPF: userCPF ?? Prisma.skip
        }
    });

    if (!updatedAddress) {
        res.status(400).json({ error: 'Endereço não encontrado' })
        return
    }

    res.status(200).json(updatedAddress);
};


export const deleteAddress = async (req: Request, res: Response) => {
    const addressId = Number(req.params.id)

    if (!addressId || isNaN(addressId)) {
        res.status(400).json({ error: 'ID de endereço inválido' })
        return
    }

    await prisma.address.delete({ where: { id: addressId } })

    res.status(200).json({ message: 'Endereço removido com sucesso' })
}