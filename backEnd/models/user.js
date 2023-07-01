const {DataTypes} = require('sequelize')
const Sequelize = require('../config/sequelize')

const User = Sequelize.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
})

module.exports = User