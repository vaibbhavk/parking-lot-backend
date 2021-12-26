const res = require("express/lib/response");
const ParkingLotAddress = require("../models/parking_lot_address.mod");
const ParkingLot = require("../models/parking_lot.mod");
const ParkingFloor = require("../models/parking_floor.mod");
const ParkingSpot = require("../models/parking_spot.mod");

const save_parking_lot_address = async (data) => {
  try {
    let parking_lot_address = await ParkingLotAddress.create({
      street: data.street,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      country: data.country,
    });
    return parking_lot_address;
  } catch (error) {
    return error;
  }
};

const find_all_parking_lot_addresses = async () => {
  try {
    let parking_lots_addresses = await ParkingLotAddress.findAll();
    return parking_lots_addresses;
  } catch (error) {
    return error;
  }
};

const save_parking_lot = async (data) => {
  try {
    console.log("parking lot data", data);
    let parking_lot = await ParkingLot.create({
      name: data.name,
      parkingLotAddressId: data.parkingLotAddressId,
      userId: 1,
    });
    return parking_lot;
  } catch (error) {
    return error;
  }
};

const find_all_parking_lots = async () => {
  try {
    let parking_lots = await ParkingLot.findAll({
      include: { model: ParkingLotAddress },
    });
    return parking_lots;
  } catch (error) {
    return error;
  }
};

const find_all_parking_lots_by_admin_user_id = async ({ id }) => {
  console.log(id);
  try {
    let parking_lots = await ParkingLot.findAll({
      where: { userId: id },
      include: { model: ParkingLotAddress },
    });
    return parking_lots;
  } catch (error) {
    return error;
  }
};
// const find_parking_floor_by_id = async (id) => {
//   try {
//     let parking_floor = await ParkingFloor.findByPk(id);
//     return parking_floor;
//   } catch (error) {
//     return error;
//   }
// };

const save_parking_floor = async (data) => {
  try {
    console.log("parking floor data", data);
    let parking_floor = await ParkingFloor.create({
      name: data.name,
      parkingLotId: 2,
    });
    return parking_floor;
  } catch (error) {
    return error;
  }
};

const destroy_parking_floor = async ({ id }) => {
  try {
    let parking_floor = await ParkingFloor.destroy({
      where: {
        id: id,
      },
    });
    return parking_floor;
  } catch (error) {
    return error;
  }
};

const update_parking_floor = async (id, body) => {
  try {
    const parking_floor = await ParkingFloor.update(
      { name: body.name },
      { where: { id: id } }
    );
    return parking_floor;
  } catch (err) {
    return err;
  }
};

const save_parking_spot = async (data) => {
  try {
    let parking_spot = await ParkingSpot.create({
      free: data.free,
      type: data.type,
      parkingFloorId: 8,
    });
    return parking_spot;
  } catch (error) {
    return error;
  }
};

const destroy_parking_spot = async ({ id }) => {
  try {
    let parking_spot = await ParkingSpot.destroy({
      where: {
        id: id,
      },
    });
    return parking_spot;
  } catch (error) {
    return error;
  }
};

const update_parking_spot = async (id, body) => {
  try {
    const parking_spot = await ParkingSpot.update(
      { free: body.free, type: body.type },
      { where: { id: id } }
    );
    return parking_spot;
  } catch (err) {
    return err;
  }
};

module.exports = {
  save_parking_lot_address,
  find_all_parking_lot_addresses,
  save_parking_lot,
  find_all_parking_lots,
  find_all_parking_lots_by_admin_user_id,
  save_parking_floor,
  destroy_parking_floor,
  update_parking_floor,
  save_parking_spot,
  destroy_parking_spot,
  update_parking_spot,
};
