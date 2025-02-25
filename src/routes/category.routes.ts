import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';

const router = Router();
const controller = new CategoryController();

router.get('/getAllCategories',controller.getAllCategories)
router.post('/addCategory',controller.createCategory)

export default router;
