const router = require("express").Router();
const { signup, login, get_access_token } = require("../../controllers/user.ctr");

router.post("/signup", (req, res, next) => {
  signup(req, res, next);
});

router.post("/login", (req, res, next) => {
  login(req, res, next);
});

router.post("/get_access_token", (req, res, next) => {
  get_access_token(req, res, next);
});

module.exports = router;
