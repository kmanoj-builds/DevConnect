import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

// Global Error Handler
import globalErrorHandler from './middelware/globalErrorHandler.js'
import notFound from './middelware/notFound.middleware.js'
import router from './routes/index.js'

const app = express()

// Middelwares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.use("/api/v1", router)

// Health Check
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "DevConnect API is running 🚀"
    });
})

app.use(notFound)

// Global Error Handler
app.use(globalErrorHandler)

export default app