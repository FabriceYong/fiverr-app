import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    gigId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        default: 0,
        enum: [1,2,3,4,5]
    },
    desc: {
        type: String,
        required: true,
    }
}, { timestamps: true})

export default mongoose.model('Review', ReviewSchema)