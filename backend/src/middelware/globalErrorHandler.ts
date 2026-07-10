import { Request, Response, NextFunction } from "express"
import ApiError from "../utils/ApiError.js"

const globalErrorHandler = (

    err: any,

    req: Request,

    res: Response,

    next: NextFunction
) => {

    let statusCode = 500
    let message = "Internal Server Error"

    if (err instanceof ApiError) {
        statusCode = err.statusCode
        message = err.message
    } else if (err instanceof Error) {
        message = err.message
    }

    res.status(statusCode).json({
        success: false,
        message,
    });
}

export default globalErrorHandler

/*
    Client Error: 4xx
    Server Error: 5xx   
*/