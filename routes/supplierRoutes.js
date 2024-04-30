import express from 'express';
import { createSupplier, getAllSuppliers, getSupplierById, updateSupplier, deleteSupplier } from '../controllers/supplierController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const supplierRoutes = express.Router();

supplierRoutes.route('/').post(createSupplier).get(authValidator, isAdmin, getAllSuppliers);
supplierRoutes.route('/:supplierId').get(getSupplierById).put(updateSupplier).delete(deleteSupplier);

export default supplierRoutes;