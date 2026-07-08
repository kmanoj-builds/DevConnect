import { Request, Response } from "express"
import { registerUser } from "./auth.service.js";
import asyncHandler from "../../utils/asyncHandler.js";

export const register = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        
        // Register Service
        const user = await registerUser(req.body)

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        })
    }
)