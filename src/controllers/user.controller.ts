import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';

export class UserController {
  async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.id;
  
      const user = await User.findOne({
        where: { id: userId },
        include: {
          model: Address,
          as: 'addresses',
        },
      });
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
  
      res.status(200).json(user);
    } catch (error:any) {
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  }

 
  async createUser(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.log(error,"err")
      res.status(400).json({ error: 'Bad request' });
    }
  }
}
