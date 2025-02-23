import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const controller = new UserController();

router.get('/:id', controller.getUserById);
router.post('/createUser',controller.createUser)

export default router;
