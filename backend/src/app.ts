import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

// Middelwares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Health Check
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "DevConnect API is running 🚀"
    });
})

export default app