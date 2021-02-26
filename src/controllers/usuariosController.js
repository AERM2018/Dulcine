const { response } = require("express")
const User = require("../models/users")

const getUsuarios = async( req, res = response) => {

    const users = await User.findAll({
        attributes : { exclude: ['createdAt', 'updatedAt']}
    }) 

    return res.status(200).json({
       users
    })
}


module.exports = {
    getUsuarios
}