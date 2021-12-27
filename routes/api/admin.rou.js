const router = require("express").Router();
const {
  add_parking_lot_address,
  add_parking_lot,
  get_all_parking_lots,
  get_all_parking_lots_by_admin_user_id,
  add_parking_floor,
  delete_parking_floor,
  edit_parking_floor,
  add_parking_spot,
  delete_parking_spot,
  edit_parking_spot,
  get_all_parking_lot_addresses,
} = require("../../controllers/admin.ctr");
const auth = require("../../middleware/auth");

// adding a parking lot address
router.post("/add_parking_lot_address", (req, res, next) => {
  add_parking_lot_address(req, res, next);
});

router.get("/get_all_parking_lot_addresses", auth, (req, res, next) => {
  get_all_parking_lot_addresses(req, res, next);
});

// adding a parking lot
router.post("/add_parking_lot", (req, res, next) => {
  add_parking_lot(req, res, next);
});

// getting all parking lots
router.get("/get_all_parking_lots", (req, res, next) => {
  get_all_parking_lots(req, res, next);
});

// getting all parking lots by admin user id
router.get("/get_all_parking_lots_by_admin_user_id/:id", (req, res, next) => {
  get_all_parking_lots_by_admin_user_id(req, res, next);
});

// adding a parking floor
router.post("/add_parking_floor", (req, res, next) => {
  add_parking_floor(req, res, next);
});

// removing a parking floor
router.delete("/delete_parking_floor/:id", (req, res, next) => {
  delete_parking_floor(req, res, next);
});

// editing a parking floor
router.patch("/edit_parking_floor/:id", (req, res, next) => {
  edit_parking_floor(req, res, next);
});

// adding a parking spot
router.post("/add_parking_spot", (req, res, next) => {
  add_parking_spot(req, res, next);
});

// removing a parking spot
router.delete("/delete_parking_spot/:id", (req, res, next) => {
  delete_parking_spot(req, res, next);
});

// editing a parking spot
router.patch("/edit_parking_spot/:id", (req, res, next) => {
  edit_parking_spot(req, res, next);
});

module.exports = router;
