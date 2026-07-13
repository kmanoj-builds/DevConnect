class AppError extends Error {

    public readonly statusCode: number
    public readonly isOperational: boolean
    public readonly errors?: unknown[]

    constructor(
        statusCode: number,
        message: string,
        errors?: unknown[]
    ) {
        super(message)

        this.statusCode = statusCode
        this.errors = errors
        this.isOperational = true

        Object.setPrototypeOf(this, AppError.prototype)
        
        Error.captureStackTrace(this, this.constructor)
    }
}


export default AppError