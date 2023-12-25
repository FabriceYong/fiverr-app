import mongoose from "mongoose";

const GigSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    totalStars: {
        type: Number,
        default: 0,
    },
    starNumber: {
        type: String,
        default: 0,
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: false,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    shortTitle: {
        type: String,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true,
    },
    revisionNumber: {
        type: Number,
        required: true
    },
    features: {
        type: [String],
        required: false,
    },
    salesNumber: {
        type: Number,
        default: 0,
    }
}, { timestamps: true})

export default mongoose.model("GigSchema", GigSchema)