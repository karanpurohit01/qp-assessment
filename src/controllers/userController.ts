import { Request, Response } from 'express';
import { GroceryService } from '../services/groceryService';

export class UserController {
  static async getAvailableItems(req: Request, res: Response): Promise<void> {
    try {
      const items = await GroceryService.getGroceryItems();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async bookItems(req: Request, res: Response): Promise<void> {
    const { userId, items } = req.body;
    try {
      await GroceryService.bookItems(userId, items);
      res.status(200).send('Items booked successfully');
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
