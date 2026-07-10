import { Request, Response } from "express"
import { registerUser } from "./auth.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const register = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        
        // Register Service
        const user = await registerUser(req.body)

        res.status(201).json(
            new ApiResponse(
                201,
                "User created",
                user
            )
        )
    }
)