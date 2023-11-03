import { check, validationResult } from "express-validator";
import Users from "../models/UserModel.js";

export const update = [
    check('name').isLength({ min: 1 }).withMessage('tidak boleh kosong'),
    check('jenis_pengguna').isLength({ min: 1 }).withMessage('tidak boleh kosong'),
    check('umur').isLength({ min: 1 }).withMessage('tidak boleh kosong'),
    check('no_telp').matches(/^08\d+$/).withMessage('format tidak sesuai'),
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