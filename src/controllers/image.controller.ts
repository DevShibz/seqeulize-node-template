import { Request, Response } from 'express';
import { Image } from '../models/image.model';


export class ImageController {
  async createImage(req: Request, res: Response) {
    try {
      const image = await Image.create(req.body);
      res.status(201).json(image);
    } catch (error) {
      console.error('Create Image Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }
  async getAllImages(req: Request, res: Response) {
    try {
      const images = await Image.findAll();
      res.status(200).json(images);
    } catch (error) {
      console.error('Get Images Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
