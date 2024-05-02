import { connect } from './config.js';
import express from "express";
import productRoutes from './routes/productRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';
import sales_orderRoutes from './routes/sales_orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

connect ();
const api = express();

api.use(express.json()); // Middleware for parsing JSON bodies

api.listen(8000, () => 
    console.log('API running on port 8000')
);

api.get('/test', (req, res) => {
    res.send('Mensajes en terminal desplegándose');
});

api.use("/products", productRoutes);
api.use("/suppliers", supplierRoutes);
api.use("/orders", sales_orderRoutes);
api.use("/carts", cartRoutes);
api.use("/users", userRoutes);
api.use("/auth", authRoutes);