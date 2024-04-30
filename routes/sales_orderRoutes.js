import express from 'express';
import { createSales_order, getAllSales_orders, getSales_orderById, updateSales_order, deleteSales_order } from '../controllers/sales_orderController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const sales_orderRoutes = express.Router();

sales_orderRoutes.route('/').post(createSales_order).get(authValidator, isAdmin, getAllSales_orders);
sales_orderRoutes.route('/:sales_orderId').get(getSales_orderById).put(updateSales_order).delete(deleteSales_order);

export default sales_orderRoutes;