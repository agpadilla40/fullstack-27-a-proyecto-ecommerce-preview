import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    rfc: {
        type: String,
        required: true,
        unique: true
    },
    businessName: {
        type: String,
        required: true
    },
    productLine: {
        type: String,
        required: true
    },
    contactName: {
        type: String,
        required: true
    },
    telephoneContact: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
        unique: true
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

export default mongoose.model("Supplier", supplierSchema);