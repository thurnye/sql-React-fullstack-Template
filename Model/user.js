const { Sequelize} = require('sequelize');
const sequelize = require('../DataBase/db')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED ,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    FirstName: {
        type: Sequelize.STRING
    },

    LastName: {
        type: Sequelize.STRING
    },

    Address: {
        type: Sequelize.STRING
    },

    Number: {
        type: Sequelize.BIGINT,
        autoIncrement: false,
    },

    Email: {
        type: Sequelize.STRING
    },
});

module.exports = User;



