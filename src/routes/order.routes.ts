import express from 'express';
import { OrderController } from '../controllers/order.controller';

const router = express.Router();
const orderController = new OrderController();

router.get('/:id',orderController.getOrdersByUser);
router.post('/createOrder',orderController.createOrder);

export default router;
