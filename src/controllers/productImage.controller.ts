import { Request, Response } from 'express';
import { ProductImage } from '../models/productImage.model';

export class ProductImageController { 
  async createProductImage(req: Request, res: Response) {
    try {
      const address = await ProductImage.create(req.body);
      res.status(201).json(address);
    } catch (error) {
      console.log(error,"err")
      res.status(400).json({ error: 'Bad request' });
    }
  }
  async getProductImages(req: Request, res: Response) {
    try {
      const categories = await ProductImage.findAll({
        where: { product_id: req.body.product_id },         
      });

      res.status(200).json(categories);
    } catch (error: any) {
      console.log(error,"error1")
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  }
}
