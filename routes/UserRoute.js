import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/User.js";
import { update } from "../validation/UsersValidation.js";

const router = express.Router();

router.get('/users', verifyToken, getAllUsers)
router.get('/users/:id', verifyToken, getUserById)
router.patch('/users/:id', verifyToken, update, updateUser)
router.delete('/users/:id', verifyToken, deleteUser)

export default router;