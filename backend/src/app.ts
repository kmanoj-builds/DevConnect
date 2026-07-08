import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

// Routes
import { AuthRoutes } from './modules/auth/auth.route.js'

// Global Error Handler
import globalErrorHandler from './utils/globalErrorHandler.js'

const app = express()

// Middelwares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.use("/api/v1/auth", AuthRoutes)

// Health Check
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "DevConnect API is running 🚀"
    });
})

// Global Error Handler
app.use(globalErrorHandler)

export default app