import { Router } from "express"
import { router as usersRouter } from "./user.js"
const router = Router()

router.use("/api/users", usersRouter)

export { router }