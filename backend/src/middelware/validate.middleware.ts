import { Request, Response, NextFunction } from "express"
import { ZodSchema } from "zod"
import AppError from "../utils/AppError.js"

const validate = (
    schema: ZodSchema
) => {

    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        
        const result = schema.safeParse(req.body)

        if (!result.success) {
            return next(
                new AppError(
                    400,
                    "Validation Failed",
                    result.error.issues
                )
            )
        }

        next()
    }
}

export default validate