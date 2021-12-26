const {
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
} = require("../entity/admin.ent");

const {
  genPasswordHash,
  checkPassword,
  generateAuthToken,
} = require("../helpers/user");

const add_parking_lot_address = async (req, res, next) => {
  try {
    let parking_lot_address = await save_parking_lot_address({
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      country: req.body.country,
    });
    return res.status(200).json({
      message: "Address saved successfully.",
      body: parking_lot_address,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const get_all_parking_lot_addresses = async (req, res, next) => {
  try {
    let parking_lot_addresses = await find_all_parking_lot_addresses();
    return res.status(200).json({
      message: "List of parking lot address",
      body: parking_lot_addresses,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const add_parking_lot = async (req, res, next) => {
  try {
    let parking_lot = await save_parking_lot({
      name: req.body.name,
      parkingLotAddressId: req.body.parkingLotAddressId,
    });
    return res.status(200).json({
      message: "Parking Lot saved successfully.",
      body: parking_lot,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const get_all_parking_lots = async (req, res, next) => {
  try {
    let parking_lots = await find_all_parking_lots();
    return res.status(200).json({
      message: "List of parking lots",
      body: parking_lots,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const get_all_parking_lots_by_admin_user_id = async (req, res, next) => {
  try {
    let parking_lots = await find_all_parking_lots_by_admin_user_id({
      id: req.params.id,
    });
    return res.status(200).json({
      message: "List of parking lots by admin user id",
      body: parking_lots,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const add_parking_floor = async (req, res, next) => {
  try {
    let parking_floor = await save_parking_floor({
      name: req.body.name,
    });
    return res.status(200).json({
      message: "Parking Floor saved successfully.",
      body: parking_floor,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const delete_parking_floor = async (req, res, next) => {
  try {
    let parking_floor = await destroy_parking_floor({
      id: req.params.id,
    });
    if (parking_floor == 1) {
      return res.status(200).json({
        message: "Parking Floor deleted successfully.",
        body: parking_floor,
      });
    } else {
      return res.status(400).json({
        message: "Could not delete parking floor.",
        body: parking_floor,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const edit_parking_floor = async (req, res, next) => {
  try {
    let parking_floor = await update_parking_floor(req.params.id, req.body);
    if (parking_floor == 1) {
      return res.status(200).json({
        message: "Parking Floor edited successfully.",
        body: parking_floor,
      });
    } else {
      return res.status(400).json({
        message: "Could not edit parking floor.",
        body: parking_floor,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const add_parking_spot = async (req, res, next) => {
  try {
    let parking_spot = await save_parking_spot({
      free: req.body.free,
      type: req.body.type,
    });
    return res.status(200).json({
      message: "Parking Spot saved successfully.",
      body: parking_spot,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const delete_parking_spot = async (req, res, next) => {
  try {
    let parking_spot = await destroy_parking_spot({
      id: req.params.id,
    });
    if (parking_spot == 1) {
      return res.status(200).json({
        message: "Parking Spot deleted successfully.",
        body: parking_spot,
      });
    } else {
      return res.status(400).json({
        message: "Could not delete parking spot.",
        body: parking_spot,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const edit_parking_spot = async (req, res, next) => {
  try {
    let parking_spot = await update_parking_spot(req.params.id, req.body);
    if (parking_spot == 1) {
      return res.status(200).json({
        message: "Parking Spot edited successfully.",
        body: parking_spot,
      });
    } else {
      return res.status(400).json({
        message: "Could not edit parking spot.",
        body: parking_spot,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  add_parking_lot_address,
  get_all_parking_lot_addresses,
  add_parking_lot,
  get_all_parking_lots,
  get_all_parking_lots_by_admin_user_id,
  add_parking_floor,
  delete_parking_floor,
  edit_parking_floor,
  add_parking_spot,
  delete_parking_spot,
  edit_parking_spot,
};
