const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
	unique: true
  },
    password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  registrationDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  lastLoginDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = User