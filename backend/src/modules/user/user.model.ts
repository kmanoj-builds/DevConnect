import { Schema, model } from "mongoose"
import { IUser } from "./user.interface.js"

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minLength: 4
        },
        lastName: {
            type: String,
            trim: true
        },
        emailId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minLength: 8
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const User = model<IUser>("User", userSchema)