import { Router } from 'express';
import userRoutes from './user.routes';
import addressRoute from './address.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoute);
export default router; 