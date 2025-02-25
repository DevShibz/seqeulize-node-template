import { Router } from 'express';
import { CartController } from '../controllers/cart.controller';

const router = Router();
const controller = new CartController();

router.post('/createCart',controller.addToCart)
router.get('/:id',controller.getCartItems)

export default router;
