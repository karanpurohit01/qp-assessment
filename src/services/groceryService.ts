import db from '../models/db';
import { GroceryItem } from '../models/groceryItem';

export class GroceryService {
  static addGroceryItem(item: GroceryItem): Promise<void> {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO grocery_items (name, price, quantity) VALUES (?, ?, ?)';
      db.query(query, [item.name, item.price, item.quantity], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static getGroceryItems(): Promise<GroceryItem[]> {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM grocery_items', (err, results) => {
        if (err) {
          reject(err);
        } else {
          // Cast the result to an array of GroceryItem
          resolve(results as GroceryItem[]);
        }
      });
    });
  }

  static removeGroceryItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM grocery_items WHERE id = ?', [id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static updateGroceryItem(id: number, updatedItem: GroceryItem): Promise<void> {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE grocery_items SET name = ?, price = ?, quantity = ? WHERE id = ?';
      db.query(query, [updatedItem.name, updatedItem.price, updatedItem.quantity, id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static bookItems(userId: number, items: { groceryItemId: number; quantity: number }[]): Promise<void> {
    return new Promise((resolve, reject) => {
      items.forEach((item) => {
        const query = 'INSERT INTO orders (user_id, grocery_item_id, quantity) VALUES (?, ?, ?)';
        db.query(query, [userId, item.groceryItemId, item.quantity], (err) => {
          if (err) reject(err);
        });
      });
      resolve();
    });
  }
}
