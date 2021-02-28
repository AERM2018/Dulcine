const { DataTypes } = require('sequelize')
const db = require('../db/connector')

const User = db.define('User', {
    id_user : {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true

    },
    username : {
        type : DataTypes.STRING
    },
    password : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
},{
    timestamps: false
});

module.exports = User;