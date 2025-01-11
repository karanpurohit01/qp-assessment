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
exports.UserController = void 0;
const groceryService_1 = require("../services/groceryService");
class UserController {
    static getAvailableItems(req, res) {
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
    static bookItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, items } = req.body;
            try {
                yield groceryService_1.GroceryService.bookItems(userId, items);
                res.status(200).send('Items booked successfully');
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
}
exports.UserController = UserController;
