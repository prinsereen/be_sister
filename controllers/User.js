import Users from "../models/UserModel.js";

export const getAllUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes: [
            'id', 
            'name',
            'jenis_pengguna',
            'umur',
            'no_telp',
            'email'
        ]
        });
        res.json(users)
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getUserById = async(req, res) => {
    try {
        const user = await Users.findOne({
        attributes: [
            'id', 
            'name',
            'jenis_pengguna',
            'umur',
            'no_telp'
        ], 
            where: {
                id: req.params.id 
            }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}