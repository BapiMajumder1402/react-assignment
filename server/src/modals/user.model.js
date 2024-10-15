import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true })





export const User = mongoose.model("User", userSchema)