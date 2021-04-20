const { Sequelize } = require('sequelize');


// Defining the data base
const db = new Sequelize('bookcook', 'root', 'beatrics1992',{
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    dialectOptions: {
        supportBigNUMBERS: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000

    },

});
module.exports = db