import bcrypt from "bcryptjs"
import { User } from "../user/user.model.js"
import { IUser } from "../user/user.interface.js"

export const registerUser = async (data: IUser) => {
    const { emailId, password } = data

    // Check for existing user
    const existingUser = await User.findOne({ emailId })
    if (existingUser) {
        throw new Error("Email already exists")
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create User
    const user = User.create({
        ...data,
        password: hashedPassword
    })

    return user
}