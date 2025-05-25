import { Router } from "express";
import { registerUser, getUserByCpf, listAllUsers } from "../controllers/userController.js";

const router = Router();

router.post('/', registerUser);
router.get('/:userCpf', getUserByCpf);
router.get('/', listAllUsers);

export { router };