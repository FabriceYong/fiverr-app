import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    isSeller: {
        type: Boolean,
        default: false
    }
}, { timestamps: true})

export default mongoose.model('User', userSchema)