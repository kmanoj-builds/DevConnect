import app from "./app.js"
import { env } from './config/env.js'
import { connectDB } from "./config/ds.js"

const startServer = async () => {
    try {
        await connectDB()

        app.listen(env.PORT, () => {
            console.log(`Server listening on port ${env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()