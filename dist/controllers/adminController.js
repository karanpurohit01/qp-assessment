"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const groceryService_1 = require("../services/groceryService");
class AdminController {
    static addGroceryItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = req.body;
            try {
                yield groceryService_1.GroceryService.addGroceryItem(item);
                res.status(201).send('Item added successfully');
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    static removeGroceryItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield groceryService_1.GroceryService.removeGroceryItem(Number(id));
                res.status(200).send('Item removed successfully');
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    static updateGroceryItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updatedItem = req.body;
            try {
                yield groceryService_1.GroceryService.updateGroceryItem(Number(id), updatedItem);
                res.status(200).send('Item updated successfully');
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    static getGroceryItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield groceryService_1.GroceryService.getGroceryItems();
                res.status(200).json(items);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
}
exports.AdminController = AdminController;
