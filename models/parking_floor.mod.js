const { Sequelize } = require("sequelize");
const db = require("../config/db");
const ParkingLot = require("./parking_lot.mod");

const ParkingFloor = db.define(
  "parking_floor",
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

ParkingLot.hasMany(ParkingFloor);
ParkingFloor.belongsTo(ParkingLot);

module.exports = ParkingFloor;
