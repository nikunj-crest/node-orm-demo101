const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-orm-setup101',
    'root',
    'nl@1234',
    {
        dialect: "mysql",
        host: process.env.HOST,
        pool: {
            max: 5,
            min: 0,
            idle: 10 * 1000,
            acquire: 80 * 1000,
        },
    })

module.exports = sequelize;