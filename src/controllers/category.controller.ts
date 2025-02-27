import { Request, Response } from 'express';
import { Category } from '../models/category.model';
import { Image } from '../models/image.model';

export class CategoryController {
  async getAllCategories(req: Request, res: Response) {
    try {
      // Get root categories with all nested subcategories and images in a single query
      const categories = await Category.findAll({
        where: { parentId: null }, // Only get root categories (categories without parent)
        include: [
          {
            model: Category,
            as: 'subcategories',
            include: [
              {
                model: Category,
                as: 'subcategories',
                include: [
                  {
                    model: Category,
                    as: 'subcategories',
                  },
                ],
              },
            ],
          },
          {
            model: Image,
          },
        ],
      });
  
      // Return the categories with their subcategories and images as JSON
      res.status(200).json(categories);
    } catch (error: any) {
      console.log(error,"error1")
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      // Get all categories with their images
      const categories = await Category.findAll({
        include: [
          {
            model: Image,
          },
        ],
      });
  
      // Return the categories with their images as JSON
      res.status(200).json(categories);
    } catch (error: any) {
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  }
  

  async createCategory(req: Request, res: Response) {
    try {
      const { name, imageId, parentId } = req.body;

      // Create new category with optional parent relationship
      const category = await Category.create({
        name,
        imageId: imageId || null,
        parentId: parentId || null,
      });

      res.status(201).json(category);
    } catch (error: any) {
      res.status(500).json({
        message: 'Error creating category',
        error: error.message,
      });
    }
  }
}
