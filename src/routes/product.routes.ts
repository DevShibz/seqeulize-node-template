import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';

const router = Router();
const controller = new ProductController();

router.get('/getAllProductById/:id',controller.getProductById)
router.post('/addProduct',controller.createProduct)

export default router;
