
import { Router } from 'express';
import { BannerController } from '../controllers/banner.controller';

const router = Router();

const controller = new BannerController();

router.post('/createBanner', controller.createBanner);
router.get('/getBanner', controller.getBanner);


export default router;
