import { Request, Response } from "express";
import { PaymentStatus } from "../../generated/prisma/index.js";
import { prisma } from '../database/client.js'

export const createPayment = async (req: Request, res: Response) => {
    const { userCPF, paymentMethod, status, orderId } = req.body;

    if (!userCPF || !paymentMethod || !status || !orderId) {
        res.status(400).json({ error: "Faltam campos obrigatórios." });
        return
    }

    if (!Object.values(PaymentStatus).includes(status)) {
        res.status(400).json({ error: "Status inválido." });
        return
    }

    const payment = await prisma.payment.create({
        data: {
            userCPF,
            orderId,
            paymentMethod,
            status,
        },
    });

    if (!payment) {
        res.status(500).json({ error: "Erro inesperado, não foi possível criar o pagamento." })
        return
    }

    res.status(201).json(payment);
}
export const getPaymentsByUserCPF = async (req: Request, res: Response) => {
    const { userCPF } = req.params;

    const user = await prisma.user.findUnique({ where: { cpf: userCPF } });
    if (!user) {
        res.status(404).json({ error: "Usuário não encontrado." });
        return;
    }

    const payments = await prisma.payment.findMany({
        where: { userCPF },
    });

    res.status(200).json(payments);
};

export const getPaymentByOrderId = async (req: Request, res: Response) => {
    const { orderId } = req.params;

    const payment = await prisma.payment.findUnique({
        where: { orderId: parseInt(orderId) },
    });

    if (!payment) {
        res.status(404).json({ error: "Pagamento não encontrado para o pedido informado." });
        return;
    }

    res.status(200).json(payment);
};

export const getPaymentsByStatus = async (req: Request, res: Response) => {
    const { status } = req.body;

    if (!status) {
        res.status(400).json({ error: "Status é obrigatório." });
        return;
    }

    if (!Object.values(PaymentStatus).includes(status)) {
        res.status(400).json({ error: "Status inválido." });
        return;
    }

    const payments = await prisma.payment.findMany({
        where: { status },
    });

    res.status(200).json(payments);
};

export const updatePaymentStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    //validação
    if (!status) {
        res.status(400).json({ error: "Payment status is required." });
        return
    }

    // validar enum
    if (!Object.values(PaymentStatus).includes(status)) {
        res.status(400).json({ error: "Invalid payment status." });
        return
    }
    const updatedPayment = await prisma.payment.update({
        where: { id: parseInt(id) },
        data: { status },
    });

    if (!updatedPayment) {
        res.status(500).json({ error: "Erro inesperado, não foi possível atualizar o status do pagamento." })
        return
    }

    res.status(200).json(updatedPayment);
};

export const deletePayment = async (req: Request, res: Response) => {
    const { id } = req.params;

    await prisma.payment.delete({
        where: { id: parseInt(id) },
    });

    res.status(204).send();
}