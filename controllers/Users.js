import Users from "../models/UserModel.js";
import bcrypt from "bcrypt"

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const register = async(req, res) => {
    const {name, jenis_pengguna, nik, password, conf_password} = req.body;
    if(password !== conf_password) return res.status(400).json({msg: "password dan confirmation password tidak cocok"})
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            jenis_pengguna: jenis_pengguna,
            nik: nik,
            password: hashPassword
        })
        res.status(200).json({msg: "Register Berhasil"})
    } catch (error) {
        console.log(error)
    }
}
