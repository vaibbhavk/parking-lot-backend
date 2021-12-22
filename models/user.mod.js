const { Sequelize } = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "user",
  {
    // attributes
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.INTEGER,
    },
  },
  { freezeTableName: true }
);

module.exports = User;
