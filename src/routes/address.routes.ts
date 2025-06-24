import { Router } from 'express';
import {
    listUserAddressesByUserCpf,
    createAddress,
    updateAddress,
    deleteAddress
} from '../controllers/addressController.js';

const router = Router();

router.get('/:userId', listUserAddressesByUserCpf); // lista endereços de um usuário
router.post('/', createAddress); // cria novo endereço
router.put('/:id', updateAddress); // atualiza endereço existente
router.delete('/:id', deleteAddress); // deleta endereço

export { router };
