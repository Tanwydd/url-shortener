const sequelize = require('../config/database');

const User = require('./User');
const Url = require('./Url');

const initializeDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synchronized');
};

module.exports = {
  initializeDatabase,
  User,
  Url
};
