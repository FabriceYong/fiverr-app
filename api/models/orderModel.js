import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    gigId: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    title: {
        type: String, 
        required: true,
    },
    price: {
        type: Number,
        default: 0,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    buyerId: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    payment_intent: {
        type: String,
        required: true
    }
}, { timestamps: true})


export default mongoose.model('Order', OrderSchema)