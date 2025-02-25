import { Request, Response } from 'express';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';


export class CartController {
  async addToCart(req: Request, res: Response) {
    try {
      const cart = await Cart.create(req.body);
      res.status(201).json(cart);
    } catch (error) {
      console.error('Create Image Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }
  async getCartItems(req: Request, res: Response) {
    try {
      const cartItems = await Cart.findAll({
        where: { userId: req.params.id },
        include: [
          {
            model: Product,
            as: 'product'  // Match the alias from association
          },
        ],
      });
      res.status(201).json(cartItems);
    } catch (error) {
      console.error('Create Image Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }

}
