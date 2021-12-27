const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Unauthorized!");
  }
  try {
    const decoded = jwt.verify(token, process.env.accessTokenKey);
    console.log(decoded)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};

module.exports = auth;
