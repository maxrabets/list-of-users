const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_PATH,
  define: {
    timestamps: false
  }
});

module.exports = sequelize;