import express from "express";
import {getUsers, register, login} from "../controllers/Users.js"
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers)
router.post('/register', register)
router.post('/login', login)
router.get('/token', refreshToken)

export default router;