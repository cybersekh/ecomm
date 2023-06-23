import express from 'express';
import CategoriesController from '../controller/categoriesController.js';

const router = express.Router();

router.get('/api/categories', CategoriesController.getAll);
router.post('/api/categories', CategoriesController.createCategory);

export default router;