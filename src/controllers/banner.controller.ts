import { Request, Response } from 'express';
import { Banner } from '../models/banner.model';


export class BannerController {
  async createBanner(req: Request, res: Response) {
    try {
      const banner = await Banner.create(req.body);
      res.status(201).json(banner);
    } catch (error) {
      console.error('Create Image Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }



  async getBanner(req: Request, res: Response) {
    try {
      const banners = await Banner.findAll({
        include: { association: 'product', attributes: ['id', 'name'],as:'product' },
      });
      res.status(200).json(banners);
    } catch (error) {
      console.error('Get Image Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }
 

}
