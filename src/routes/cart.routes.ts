import { Router } from 'express';
import {
    createCart,
    emptyCart,
    addCartItem,
    decrementQuantityOrRemoveCartItem,
    getCartByUserCpf,
    getCartItemsByCartId
} from '../controllers/cartController.js';

const router = Router();

router.get("/user/:userCpf", getCartByUserCpf);
router.get("/items/:cartId", getCartItemsByCartId);
router.post('/', createCart); // cria um carrinho
router.delete('/:userCPF', emptyCart); // esvazia o carrinho
router.post('/:userCPF/items', addCartItem); // adiciona item ao carrinho
router.patch('/:cpf/items/:itemId', decrementQuantityOrRemoveCartItem); // remove 1 ou deleta item

export { router };