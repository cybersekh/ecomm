import express from 'express';
import CategoriesController from '../controller/categoriesController.js';

const router = express.Router();

router.get('/api/categories', CategoriesController.getAll);
router.get('/api/categories/:id', CategoriesController.getById);
router.post('/api/categories', CategoriesController.createCategory);
router.put('/api/categories/:id', CategoriesController.attCateg);
router.delete('/api/categories/:id', CategoriesController.deleteCateg);

export default router;