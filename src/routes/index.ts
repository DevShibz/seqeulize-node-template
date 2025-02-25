import { Router } from 'express';
import userRoutes from './user.routes';
import addressRoute from './address.routes';
import categoryRoute from './category.routes'
import productRoute from './product.routes'
import imageRoute from './image.routes'
import productImageRoute from './productImage.routes'
import cartRoute from './cart.routes'
const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoute);
router.use('/category',categoryRoute)
router.use('/product',productRoute)
router.use('/images',imageRoute)
router.use('productImage',productImageRoute)
router.use('/cart',cartRoute)
export default router; 