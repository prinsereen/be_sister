import Users from "../models/UserModel.js";

export const getAllUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'jenis_pengguna', 'nik']
        });
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}