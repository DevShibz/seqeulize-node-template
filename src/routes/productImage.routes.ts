import { Router } from 'express';
import { ProductImageController } from '../controllers/productImage.controller';

const router = Router();
const controller = new ProductImageController();

router.get('/', controller.getProductImages);
router.post('/createProductImages',controller.createProductImage)

export default router;
