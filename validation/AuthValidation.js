import { check, validationResult } from "express-validator";
import Users from "../models/UserModel.js";

export const Register = [
    check('name').isLength({ min: 1 }).withMessage('tidak boleh kosong'),
    check('email').isEmail().withMessage('format tidak sesuai')
    .custom(async(email, {req}) => {
        const existingUser = await Users.findOne({
            where: {email: email}
        })
        if (existingUser){
            throw new Error('user sudah terdaftar') 
        }
    })
]

export const Login = [
    check('name').isLength({ min: 1 }).withMessage('tidak boleh kosong'),
    check('email').isEmail().withMessage('format tidak sesuai')
]