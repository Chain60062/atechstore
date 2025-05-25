import { Request, Response } from "express"
import { prisma } from '../database/client.js'
import { Prisma, OrderStatus } from "../../generated/prisma/index.js";

export const createOrderFromCart = async (req: Request, res: Response) => {
    const { cpf } = req.params;
    const { paymentMethod, shippingAddressId, shippingCost, shippingMethod } = req.body;

    if (!paymentMethod || !shippingAddressId || !shippingCost || !shippingMethod) {
        res.status(400).json({ message: 'Dados de envio ou pagamento ausentes.' });
        return
    }

    const cart = await prisma.cart.findUnique({
        where: { userCPF: cpf },
        include: {
            cartItems: {
                include: {
                    product: true,
                },
            },
        },
    });

    if (!cart) {
        res.status(404).json({ message: 'Carrinho não encontrado.' });
        return;
    }

    if (cart.cartItems.length === 0) {
        res.status(400).json({ message: 'Carrinho está vazio.' });
        return;
    }

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
                status: OrderStatus.PENDING,
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

        await tx.cartItem.deleteMany({
            where: { cartId: cart.id },
        });

        return newOrder;
    });

    res.status(201).json(order);
};

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
        res.status(204).send()
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
        res.status(204).send();
        return
    }

    res.status(200).json(order.orderItems);
};

export const cancelOrder = async (req: Request, res: Response) => {
    const orderId = parseInt(req.params.orderId);

    if (isNaN(orderId)) {
        res.status(400).json({ message: 'ID de pedido inválido.' });
        return
    }

    const order = await prisma.order.findUnique({
        where: { id: orderId },
    });

    if (!order) {
        res.status(404).json({ message: 'Pedido não encontrado.' });
        return
    }

    if (order.status === OrderStatus.CANCELLED) {
        res.status(400).json({ message: 'Pedido já cancelado.' });
        return
    }

    if (order.status === OrderStatus.DELIVERED) {
        res.status(400).json({ message: 'Pedido já entregue.' });
        return
    }

    const cancelledOrder = await prisma.order.update({
        where: { id: orderId },
        data: { status: OrderStatus.CANCELLED },
    });

    res.status(200).json({
        message: 'Pedido cancelado com sucesso.',
        order: cancelledOrder,
    });
};
//calcular impacto total das vendas canceladas
export const financialCancellationReport = async (req: Request, res: Response) => {
    try {
        const cancelledOrders = await prisma.order.findMany({
            where: {
                status: OrderStatus.CANCELLED,
            },
            select: {
                id: true,
                total: true,
                shippingCost: true,
                createdAt: true,
            },
        });

        if (cancelledOrders.length === 0) {
            res.status(200).json({
                message: 'Nenhum pedido cancelado encontrado.',
                totalImpacto: 0,
                pedidos: [],
            });
            return;
        }

        const totalImpact = cancelledOrders.reduce((acc, order) => {
            const impactoPedido = order.total.add(order.shippingCost);
            return acc.add(impactoPedido);
        }, new Prisma.Decimal(0));

        res.status(200).json({
            totalImpact: totalImpact.toFixed(2),
            orders: cancelledOrders.map((order) => ({
                id: order.id,
                total: order.total.toFixed(2),
                shippingCost: order.shippingCost.toFixed(2),
                impacto: order.total.add(order.shippingCost).toFixed(2),
                dataCancelamento: order.createdAt,
            })),
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao gerar relatório financeiro.', error });
    }
};
