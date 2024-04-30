import mongoose from "mongoose";

const sales_orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cartTotal: {
        type: Number,
        required: true
    },
    
    freightCost: {
        type: Number,
        required: true
    },
    grandTotal: {
        type: Number,
        required: true
    },
    requestDate: {
        type: Date,
        required: true
    },
    promiseDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Sales_order", sales_orderSchema);