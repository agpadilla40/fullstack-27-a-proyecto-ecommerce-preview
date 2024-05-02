import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const productRoutes = express.Router();

productRoutes.route('/').post(createProduct).get(authValidator, isAdmin, getAllProducts);
productRoutes.route('/:productId').get(getProductById).put(updateProduct).delete(deleteProduct);

export default productRoutes;