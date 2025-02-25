import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const controller = new UserController();

router.get('/:id', controller.getUserById);
router.post('/createUser',controller.createUser)
router.post('/registerUser',controller.registerUser)
router.post('/loginUser',controller.loginUser)
export default router;
