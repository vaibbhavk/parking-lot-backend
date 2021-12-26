const { Sequelize } = require("sequelize");
const db = require("../config/db");
const ParkingFloor = require("./parking_floor.mod");

const ParkingSpot = db.define(
  "parking_spot",
  {
    // attributes
    free: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

ParkingFloor.hasMany(ParkingSpot);
ParkingSpot.belongsTo(ParkingFloor);

module.exports = ParkingSpot;
