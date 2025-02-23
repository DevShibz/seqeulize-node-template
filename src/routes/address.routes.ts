import { Router } from 'express';
import { AddressController } from '../controllers/address.controller';

const router = Router();
const controller = new AddressController();

router.post('/createAddress',controller.createAddress)

export default router;
