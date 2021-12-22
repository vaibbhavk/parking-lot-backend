const router = require("express").Router();

router.use("/user", require("./api/user.rou"));
router.use("/admin", require("./api/admin.rou"));
router.use("/customer", require("./api/customer.rou"));
router.use("/attendant", require("./api/attendant.rou"));
router.use("/system", require("./api/system.rou"));

module.exports = router;
