import express from 'express';
import { LayoutController } from '../controllers/layout.controller';

const router = express.Router();
const layoutController = new LayoutController();

router.get('/',layoutController.getAllLayouts);
router.post('/createLayout',layoutController.createLayout);

export default router;
