import { Request, Response } from 'express';
import { Layout } from '../models/layout.model';
import { Banner } from '../models/banner.model';


export class LayoutController {
  async createLayout(req: Request, res: Response) {
    try {
      const banner = await Layout.create(req.body);
      res.status(201).json(banner);
    } catch (error) {
      console.error('Create Image Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }



  async getAllLayouts(req: Request, res: Response) {
    try {
      const layouts = await Layout.findAll({
        include:[Banner],
        where: { show: true },
      });
      res.status(200).json(layouts);
    } catch (error) {
      console.error('Get Image Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }
 

}
