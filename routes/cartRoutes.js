import express from 'express';
import { createCart, getAllCarts, getCartById, updateCart, deleteCart } from '../controllers/cartController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const cartRoutes = express.Router();

cartRoutes.route('/').post(createCart).get(authValidator, isAdmin, getAllCarts);
cartRoutes.route('/:cartId').get(getCartById).put(updateCart).delete(deleteCart);

export default cartRoutes;