"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroceryService = void 0;
const db_1 = __importDefault(require("../models/db"));
class GroceryService {
    static addGroceryItem(item) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO grocery_items (name, price, quantity) VALUES (?, ?, ?)';
            db_1.default.query(query, [item.name, item.price, item.quantity], (err) => {
                if (err)
                    reject(err);
                resolve();
            });
        });
    }
    static getGroceryItems() {
        return new Promise((resolve, reject) => {
            db_1.default.query('SELECT * FROM grocery_items', (err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    // Cast the result to an array of GroceryItem
                    resolve(results);
                }
            });
        });
    }
    static removeGroceryItem(id) {
        return new Promise((resolve, reject) => {
            db_1.default.query('DELETE FROM grocery_items WHERE id = ?', [id], (err) => {
                if (err)
                    reject(err);
                resolve();
            });
        });
    }
    static updateGroceryItem(id, updatedItem) {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE grocery_items SET name = ?, price = ?, quantity = ? WHERE id = ?';
            db_1.default.query(query, [updatedItem.name, updatedItem.price, updatedItem.quantity, id], (err) => {
                if (err)
                    reject(err);
                resolve();
            });
        });
    }
    static bookItems(userId, items) {
        return new Promise((resolve, reject) => {
            items.forEach((item) => {
                const query = 'INSERT INTO orders (user_id, grocery_item_id, quantity) VALUES (?, ?, ?)';
                db_1.default.query(query, [userId, item.groceryItemId, item.quantity], (err) => {
                    if (err)
                        reject(err);
                });
            });
            resolve();
        });
    }
}
exports.GroceryService = GroceryService;
