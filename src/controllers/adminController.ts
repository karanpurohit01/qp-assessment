import { Request, Response } from 'express';
import { GroceryService } from '../services/groceryService';
import { GroceryItem } from '../models/groceryItem';

export class AdminController {
  static async addGroceryItem(req: Request, res: Response): Promise<void> {
    const item: GroceryItem = req.body;
    try {
      await GroceryService.addGroceryItem(item);
      res.status(201).send('Item added successfully');
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async removeGroceryItem(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await GroceryService.removeGroceryItem(Number(id));
      res.status(200).send('Item removed successfully');
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async updateGroceryItem(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedItem: GroceryItem = req.body;
    try {
      await GroceryService.updateGroceryItem(Number(id), updatedItem);
      res.status(200).send('Item updated successfully');
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async getGroceryItems(req: Request, res: Response): Promise<void> {
    try {
      const items = await GroceryService.getGroceryItems();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
