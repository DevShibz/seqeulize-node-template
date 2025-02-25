import { Router } from 'express';
import { ImageController } from '../controllers/image.controller';

const router = Router();
const controller = new ImageController();

router.get('/', controller.getAllImages);
router.post('/createImage',controller.createImage)

export default router;
