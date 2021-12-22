const router = require("express").Router();
const { signup, login } = require("../../controllers/user.ctr");

router.post("/signup", (req, res, next) => {
  signup(req, res, next);
});

router.post("/login", (req, res, next) => {
  login(req, res, next);
});

module.exports = router;
