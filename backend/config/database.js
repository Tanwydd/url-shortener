const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USER, process.env.MARIADB_PASSWORD, {
  host: process.env.MARIADB_HOST,
  dialect: 'mariadb',
});

module.exports = sequelize;
