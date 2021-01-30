import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    login:      {
        type: String,
        required: true,
        unique: true
    },
    password:   {
        type: String,
        required: true
    },
    email:      {
        type: String,
        required: true,
        unique: true
    },
    create_at:  {
        type: String,
        required: true,
    },
    birthDay:   {
        type: String,
        required: true,
    },
    activated: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        required: true,
        unique: true
    }
})

export const User = mongoose.model("User", userSchema)