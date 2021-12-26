const { Sequelize } = require("sequelize");
const db = require("../config/db");
const ParkingLotAddress = require("./parking_lot_address.mod");
const User = require("./user.mod");

const ParkingLot = db.define(
  "parking_lot",
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

ParkingLotAddress.hasMany(ParkingLot);
ParkingLot.belongsTo(ParkingLotAddress);
User.hasMany(ParkingLot);
ParkingLot.belongsTo(User);

module.exports = ParkingLot;
