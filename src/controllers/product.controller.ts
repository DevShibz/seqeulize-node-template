import { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { ProductImage } from '../models/productImage.model';
import { Category } from '../models/category.model';
import { ProductDetails } from '../models/productdetails.model';

export class ProductController {
    async createProduct(req: Request, res: Response) {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.log(error, "err")
            res.status(400).json({ error: 'Bad request' });
        }
    }

    async getProductById(req: Request, res: Response) {
        try {
            const products = await Product.findAll({
                where: {
                    category_id: req.params.id
                },
                include: [
                    {
                        model: Category,
                        as: 'category', // Make sure this matches the alias defined in the association
                    }
                ]
            });

            products ? res.json(products) : res.status(404).json({ error: 'Product not found' });
        } catch (error) {
            console.log(error, "err1")
            res.status(500).json({ error: error instanceof Error ? error.message : 'Server error' });
        }
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await Product.findAll({
                include: [
                    { model: ProductImage, as: 'images' },
                ]
            });
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : 'Server error' });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const [updated] = await Product.update(req.body, {
                where: { id: req.params.id }
            });
            updated ? res.json(await Product.findByPk(req.params.id)) : res.status(404).json({ error: 'Product not found' });
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : 'Bad request' });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const deleted = await Product.destroy({
                where: { id: req.params.id }
            });
            deleted ? res.status(204).end() : res.status(404).json({ error: 'Product not found' });
        } catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : 'Server error' });
        }
    }
}
