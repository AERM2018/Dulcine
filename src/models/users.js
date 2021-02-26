const { DataTypes } = require('sequelize')
const db = require('../db/connector')

const User = db.define('User', {
    username : {
        type : DataTypes.STRING
    },
    password : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
});

module.exports = User;