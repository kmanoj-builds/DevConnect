import { Router } from "express"

// Routes
import { AuthRoutes } from "../modules/auth/auth.route.js"

// Router
const router = Router()

// auth routes
router.use('/auth', AuthRoutes)

export default router