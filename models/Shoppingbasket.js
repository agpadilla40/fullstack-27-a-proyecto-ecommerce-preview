import mongoose from "mongoose";

const shoppingbasketSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
        unique: true
    },
    requestedQuantity: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    productsQuantity: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    freightCost: {
        type: Number,
        required: true
    },
    grandTotal: {
        type: Number,
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

export default mongoose.model("Shoppingbasket", shoppingbasketSchema);