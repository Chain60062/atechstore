import { Router } from 'express';
import {
    listAllCategories,
    listCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from '../controllers/categoryController.js';

const router = Router();

router.get('/', listAllCategories); // lista todas as categorias
router.get('/:categoryId', listCategoryById); // lista uma categoria específica
router.post('/', createCategory); // cria nova categoria
router.put('/:categoryId', updateCategory); // atualiza uma categoria existente
router.delete('/:categoryId', deleteCategory); // deleta uma categoria

export { router };
