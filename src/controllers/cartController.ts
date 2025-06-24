import { prisma } from '../database/client.js'
import { Request, Response } from 'express'

//provavelmente nunca irá ser utilizada, pois o carrinho já é criado quando o usuario é registrado
//mas está aqui para se ele for deletado
export const createCart = async (req: Request, res: Response) => {
    const { userCPF } = req.body

    await prisma.cart.create({
        data: {
            userCPF
        }
    })
    res.status(201).json({ message: 'Carrinho criado com sucesso.' })
}

export const getCartByUserCpf = async (req: Request, res: Response) => {
    const { userCpf } = req.params;

    const cart = await prisma.cart.findUnique({
        where: { userCPF: userCpf },
        include: { cartItems: true }
    });

    if (!cart) {
        res.status(404).json({ error: "Carrinho não encontrado para o usuário." });
        return;
    }

    res.status(200).json(cart);
};

export const getCartItemsByCartId = async (req: Request, res: Response) => {
    const cartId = Number(req.params.cartId);

    if (isNaN(cartId)) {
        res.status(400).json({ error: "ID de carrinho inválido." });
        return;
    }

    const items = await prisma.cartItem.findMany({
        where: { cartId },
        include: { product: true }, // Optional: include product details
    });

    res.status(200).json(items);
};

export const emptyCart = async (req: Request, res: Response) => {
    const { userCPF } = req.params;

    const cart = await prisma.cart.findUnique({
        where: {
            userCPF,
        },
    });

    if (!cart) {
        res.status(404).json({ message: 'Carrinho não encontrado.' });
        return
    }

    await prisma.cartItem.deleteMany({
        where: {
            cartId: cart.id,
        },
    });

    res.status(200).json({ message: 'Carrinho esvaziado com sucesso.' });
};

export const addCartItem = async (req: Request, res: Response) => {
    const { userCPF } = req.params;
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity <= 0) {
        res.status(400).json({ message: 'Valor(es) inválidos.' });
        return
    }

    const cart = await prisma.cart.findUnique({
        where: {
            userCPF,
        },
    });

    if (!cart) {
        res.status(404).json({ message: 'Carrinho não encontrado' });
        return
    }

    const existingItem = await prisma.cartItem.findFirst({
        where: {
            cartId: cart.id,
            productId: productId,
        },
    });

    if (existingItem) {
        await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: {
                quantity: existingItem.quantity + quantity,
            },
        });
    } else {
        await prisma.cartItem.create({
            data: {
                cartId: cart.id,
                productId,
                quantity
            },
        });
    }

    res.status(200).json({ message: 'Item adicionado ao carrinho com sucesso' });
};

export const decrementQuantityOrRemoveCartItem = async (req: Request, res: Response) => {
    const { cpf, itemId } = req.params;

    const cart = await prisma.cart.findUnique({
        where: { userCPF: cpf },
    });

    if (!cart) {
        res.status(404).json({ message: 'Carrinho não encontrado.' });
        return
    }

    const item = await prisma.cartItem.findUnique({
        where: { id: parseInt(itemId) },
    });

    if (!item || item.cartId !== cart.id) {
        res.status(404).json({ message: 'Item não encontrado no carrinho' });
        return
    }

    if (item.quantity > 1) {
        await prisma.cartItem.update({
            where: { id: item.id },
            data: {
                quantity: item.quantity - 1,
            },
        });
        res.status(200).json({ message: '' });
        return
    } else {
        await prisma.cartItem.delete({
            where: { id: item.id },
        });
        res.status(200).json({ message: 'Item removido completamento do carrinho' });
        return
    }
};
