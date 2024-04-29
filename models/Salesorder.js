import mongoose from "mongoose";

const salesorderSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    requestedQuantity: {
        type: Number,
        required: true
    },
    extendedPrice: {
        type: Number,
        required: true
    },
    freightCost: {
        type: Number,
        required: true
    },
    totalPrice: {
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

export default mongoose.model("Salesorder", salesorderSchema);