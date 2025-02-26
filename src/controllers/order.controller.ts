import { Request, Response } from 'express';
import { Orders } from '../models/order.model';
import { Product } from '../models/product.model';
import { Users } from '../models/user.model';

export class OrderController {
    async getOrdersByUser(req: Request, res: Response) {
        try {
            const orders = await Orders.findAll({
                where: { user_id: req.params.id },
                include: [Product, Users]
            });
            res.status(200).json({ success: true, data: orders });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async createOrder(req: Request, res: Response) {
        try {

            const newOrder = await Orders.create({
                user_id: req.body.user_id, // Assuming authenticated user
                product_id:req.body.product_id,
                address_id:req.body.address_id,
                price:req.body.price,
                delievery_charge: req.body.delievery_charge,
                status: 'pending'
            });

            res.status(201).json({ success: true, data: newOrder });
        } catch (error: any) {
            console.log(error,"error")
            res.status(500).json({ success: false, message: error.message });
        }
    }
}