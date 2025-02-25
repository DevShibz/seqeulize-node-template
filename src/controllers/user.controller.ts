import express, { Request, Response } from 'express';
import { Users } from '../models/user.model';
import { Address } from '../models/address.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {
  async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.id;
  
      const user = await Users.findOne({
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
      const user = await Users.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.log(error,"err")
      res.status(400).json({ error: 'Bad request' });
    }
  }

  
  async registerUser(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { email, password,name } = req.body;
      
      // Check if user exists
      const existingUser = await Users.findOne({ where: { email } });
      if (existingUser) {
         res.status(400).json({ message: 'Email already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await Users.create({
        ...req.body,
        password: hashedPassword,
        name:req.body.name
      });
      
      res.status(201).json(user);
    } catch (error: any) {
      console.log(error,"err")
      res.status(400).json({ error: error.message });
    }
  }

  async loginUser(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { email, password } = req.body;
      
      const user:any = await Users.findOne({ where: { email } });
      if (!user) {
         res.status(401).json({ message: 'Invalid credentials' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
         res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create JWT token
      const token:any = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'your_secret_key',
        { expiresIn: '1h' }
      );

      res.status(200).json({ token });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

}
