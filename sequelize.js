var pg = require('pg');
pg.defaults.ssl.rejectUnauthorized = false;

const Sequelize = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize({
  // dialect: "sqlite",
  // storage: process.env.DATABASE_URL,
  // define: {
    // timestamps: false
  // }
// });

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;