import { Router } from "express"

// Individual route files
import { router as usersRouter } from "./user.routes.js"
import { router as productsRouter } from "./product.routes.js"
import { router as categoriesRouter } from "./category.routes.js"
import { router as cartRouter } from "./cart.routes.js"
import { router as orderRouter } from "./order.routes.js"
import { router as paymentRouter } from "./payment.routes.js"
import { router as addressRouter } from "./address.routes.js"
import { router as reviewRouter } from "./review.routes.js"

const router = Router()

// Route mappings
router.use("/api/users", usersRouter)
router.use("/api/products", productsRouter)
router.use("/api/categories", categoriesRouter)
router.use("/api/carts", cartRouter)
router.use("/api/orders", orderRouter)
router.use("/api/payments", paymentRouter)
router.use("/api/addresses", addressRouter)
router.use("/api/reviews", reviewRouter)

export { router }
