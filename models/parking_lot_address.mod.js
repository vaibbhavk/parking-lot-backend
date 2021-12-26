const { Sequelize } = require("sequelize");
const db = require("../config/db");

const ParkingLotAddress = db.define(
  "parking_lot_address",
  {
    // attributes
    street: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zipcode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

module.exports = ParkingLotAddress;
