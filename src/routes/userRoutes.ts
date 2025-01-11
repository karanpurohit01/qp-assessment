import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

router.get('/items', UserController.getAvailableItems);
router.post('/book', UserController.bookItems);

export default router;
