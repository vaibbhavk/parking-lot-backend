const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const genPasswordHash = async (myPassword, saltRounds) => {
  let hash = await bcrypt.hash(myPassword, saltRounds);
  return hash;
};

const checkPassword = async (password, hash_from_db) => {
  let isCorrectPassword = await bcrypt.compare(password, hash_from_db);
  return isCorrectPassword;
};

const generateAuthToken = (id) => {
  let token = jwt.sign({ id }, process.env.privateKey, { expiresIn: "100d" });
  return token;
};

module.exports = { genPasswordHash, checkPassword, generateAuthToken };
