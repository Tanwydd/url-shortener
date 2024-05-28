const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Url = sequelize.define('Url', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  originalUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

User.hasMany(Url, { foreignKey: 'userId' });
Url.belongsTo(User, { foreignKey: 'userId' });

module.exports = Url;
