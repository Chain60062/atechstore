import { Response, Request } from 'express'
import { prisma } from '../database/client.js'

export const registerUser = async (req: Request, res: Response) => {
    const { cpf, nome, dataDeNascimento } = req.body

    if (!cpf || !nome || !dataDeNascimento) {
        res.status(400).json({ error: 'Campos obrigatórios em falta ou incorretos' })
        return
    }

    await prisma.user.create({
        data: {
            cpf,
            nome,
            dataDeNascimento,
            //criar carrinho junto com usuario
            cart: {
                create: {}//não precisa especificar foreign key(userCPF na tabela cart)
            }
        }
    })
    
    res.status(200).json({ message: 'Usuario criado com sucesso.' })
}

export const getUserByCpf = async (req: Request, res: Response) => {
    const userCPF = req.params.userCpf;

    const user = await prisma.user.findUnique({
        where: { cpf: userCPF }
    });

    if (!user) {
        res.status(404).json({ error: 'Usuário não encontrado' });
        return
    }

    res.status(200).json(user);
};

export const listAllUsers = async (_req: Request, res: Response) => {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
};