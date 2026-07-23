import User from "../user/user.model.js"
import bcrypt from "bcryptjs"

import { RegisterDto } from "./dto/register.dto.js"

import AppError from "../../utils/AppError.js"

const register = async (payload: RegisterDto) => {

    // Check if email or username already exists
    const existingUser = await User.findOne({
        $or: [
            { email: payload.email },
            { username: payload.username }
        ]
    })

    if (existingUser) {
        if (existingUser.email === payload.email) {
            throw new AppError(409, "Email already exists")
        }

        if (existingUser.username === payload.username) {
            throw new AppError(409, "Username already exists")
        }
    }

    // // Hash Password
    // const hashedPassword = await bcrypt.hash(payload.password, 10)

    // Create User
    const user = await User.create(payload)

    return {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
    }
}


export const authService = {
    register,
}