import { Router } from 'express';
import {
    createPayment,
    updatePaymentStatus,
    deletePayment,
    getPaymentByOrderId,
    getPaymentsByUserCPF,
    getPaymentsByStatus
} from '../controllers/paymentController.js';

const router = Router();

router.get('/user/:userCPF', getPaymentsByUserCPF);      
router.get('/order/:orderId', getPaymentByOrderId);//status vai no corpo da requisição
router.post('/status', getPaymentsByStatus);
router.post('/', createPayment);
router.patch('/:id', updatePaymentStatus);
router.delete('/:id', deletePayment);

export { router };