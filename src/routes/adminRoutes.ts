import { Router } from 'express';
import { AdminController } from '../controllers/adminController';

const router = Router();

router.post('/add', AdminController.addGroceryItem);
router.get('/', AdminController.getGroceryItems);
router.delete('/:id', AdminController.removeGroceryItem);
router.put('/:id', AdminController.updateGroceryItem);

export default router;
