const { Sequelize } = require('sequelize');


// Defining the data base
const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,{
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