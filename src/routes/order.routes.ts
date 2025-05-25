import { Router } from 'express';
import {
    listAllUserOrders,
    listAllOrderItems,
    createOrderFromCart,
    cancelOrder,
    financialCancellationReport
} from '../controllers/orderController.js';

const router = Router();

router.get('/:userCPF', listAllUserOrders); // lista todos os pedidos de um usuário
router.get('/items/:orderId', listAllOrderItems); // lista todos os itens de um pedido
router.post('/:cpf', createOrderFromCart); // cria pedido a partir do carrinho
router.patch('/cancel/:orderId', cancelOrder); // cancela pedido(não deleta)
router.get('/relatorio/cancelados', financialCancellationReport);

export { router };