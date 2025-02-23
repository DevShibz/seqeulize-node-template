import { Request, Response } from 'express';
import { Address } from '../models/address.model';

export class AddressController { 
  async createAddress(req: Request, res: Response) {
    try {
      const address = await Address.create(req.body);
      res.status(201).json(address);
    } catch (error) {
      console.log(error,"err")
      res.status(400).json({ error: 'Bad request' });
    }
  }
}
