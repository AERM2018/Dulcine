const { response } = require("express")
const User = require("../models/users")

const getUsuarios = async (req, res = response) => {

    const users = await User.findAll({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
    })

    return res.status(200).json({
        users
    })
}

const crearUsuario = async (req, res) => {
    const { body } = req
    try {
        const user = User.create(body);
        (await user).save()

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Hable con el administrador"
        })
    }
    

    res.status(201).json({
        msg: "Usuario creado correctamente",
        
    })
}


module.exports = {
    getUsuarios,
    crearUsuario
}