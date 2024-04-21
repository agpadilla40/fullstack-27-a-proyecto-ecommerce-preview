import { connect } from './config.js';
import express from "express";
// import productRoutes from './routes/productRoutes.js';
// import supplierRoutes from './routes/supplierRoutes.js';
// import salesorderRouter from './routes/salesorderRoutes.js';
// import shoppingbasketRoutes from './routes/shoppingbasketRoutes.js';
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

//api.use("/products", productRoutes);
//api.use("/suppliers", supplierRoutes);
//api.use("/orders", salesorderRouter);
//api.use("/baskets", shoppingbasketRoutes);
api.use("/users", userRoutes);
api.use("/auth", authRoutes);