import { Router } from "express"
import {
    listReviewsByProduct,
    listReviewsByUser,
    createReview,
    updateReview,
    deleteReview
} from "../controllers/reviewController.js"

const router = Router()

router.get("/product/:productId", listReviewsByProduct)
router.get("/user/:userCpf", listReviewsByUser)
router.post("/", createReview)
router.put("/:id", updateReview)
router.delete("/:id", deleteReview)

export { router }
