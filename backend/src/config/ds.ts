import mongoose from "mongoose"
import { env } from "./env.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGODB_URI)

        console.log("MongoDB connected successfully.")
    } catch (error) {
        console.log("MongoDB connection failed.", error)
        process.exit(1)
    }
}