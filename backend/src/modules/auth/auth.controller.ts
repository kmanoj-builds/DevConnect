import { Request, Response } from "express"

import { authService } from "./auth.service.js"

import asyncHandler from "../../utils/asyncHandler.js"
import ApiResponse from "../../utils/ApiResponse.js"

const register = asyncHandler(
    async (req: Request, res: Response) => {
        
        const user = await authService.register(req.body)

        return res.status(201).json(
            new ApiResponse(201, "User registered successfully", user)
        )
    }
)

export const authController = {
    register,
}