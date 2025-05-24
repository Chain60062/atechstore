import { Request, Response } from "express"
import { prisma } from '../database/client.js'
import { Prisma, OrderStatus } from "../../generated/prisma/index.js";

export const listAllUserOrders = async (req: Request, res: Response) => {
    const userCPF = req.params.userCPF;

    const userWithOrders = await prisma.user.findUnique({
        where: { cpf: userCPF },
        include: {
            orders: true,
        },
    });

    if (!userWithOrders) {
        res.status(404).json({ message: 'Usuário não encontrado.' })
        return
    }

    //não possuir nenhum pedido não é necessariamente um erro, então array vazio parece adequado
    if (userWithOrders.orders.length === 0) {
        res.status(204).json([])
        return
    }

    res.status(200).json(userWithOrders.orders);
};

export const listAllOrderItems = async (req: Request, res: Response) => {
    const { orderId } = req.params;

    if (isNaN(Number(orderId))) {
        res.status(400).json({ error: 'ID do pedido em formato inválido.' })
        return
    }

    const order = await prisma.order.findUnique({
        where: { id: Number(orderId) },
        include: {
            orderItems: true,
        },
    });

    if (!order) {
        res.status(404).json({ message: 'Pedido não encontrado.' });
        return
    }

    if (order.orderItems.length === 0) {
        res.status(204).json([]);
        return
    }

    res.status(200).json(order.orderItems);
};

export const createOrderFromCart = async (req: Request, res: Response) => {
    const { cpf } = req.params;
    const { paymentMethod, shippingAddressId, shippingCost, shippingMethod } = req.body

    const cart = await prisma.cart.findUnique({
        where: { userCPF: cpf },
        include: {
            cartItems: {
                include: {
                    product: true, // <-- get product and its price
                },
            },
        },
    });

    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    if (cart.cartItems.length === 0) {
        return res.status(400).json({ message: 'Cart is empty' });
    }
    //calcular o total
    const total = cart.cartItems.reduce((sum, item) => {
        const itemTotal = item.product.price.mul(item.quantity);
        return sum.add(itemTotal);
    }, new Prisma.Decimal(0));

    const order = await prisma.$transaction(async (tx) => {
        const newOrder = await tx.order.create({
            data: {
                userCPF: cpf,
                total,
                paymentMethod,
                shippingMethod,
                shippingAddressId,
                shippingCost,
                orderItems: {
                    create: cart.cartItems.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                    })),
                },
            },
            include: {
                orderItems: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        //limpar o carrinho
        await tx.cartItem.deleteMany({
            where: { cartId: cart.id },
        });

        return newOrder;
    });

    res.status(201).json(order);
};

export const cancelOrder = async (req: Request, res: Response) => {
    const orderId = parseInt(req.params.orderId);

    if (isNaN(orderId)) {
        return res.status(400).json({ message: 'Invalid order ID' });
    }

    const order = await prisma.order.findUnique({
        where: { id: orderId },
    });

    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status === OrderStatus.CANCELLED) {
        return res.status(400).json({ message: 'Pedido já foi cancelado' });
    }

    if (order.status === OrderStatus.DELIVERED) {
        return res.status(400).json({ message: '' });
    }

    const cancelledOrder = await prisma.order.update({
        where: { id: orderId },
        data: { status: OrderStatus.CANCELLED },
    });

    res.status(200).json({
        message: 'Order cancelled successfully',
        order: cancelledOrder,
    });
};