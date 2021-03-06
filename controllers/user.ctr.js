const { get_user, save_user } = require("../entity/user.ent");
const {
  genPasswordHash,
  checkPassword,
  generateAuthToken,
} = require("../helpers/user");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async function (req, res, next) {
  try {
    let user_exists = await get_user(req.body);

    if (!user_exists.success) {
      let hash = await genPasswordHash(req.body.password, 10);
      // save the user to the database
      let user = await save_user({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        type: req.body.type,
        password: hash,
      });
      return res.status(200).json({
        message: "User successfully registered.",
        body: _.pick(user, ["id", "email"]),
      });
    } else {
      return res
        .status(400)
        .json({ message: "User with this email already exists.", body: "" });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const login = async function (req, res, next) {
  try {
    let user_exists = await get_user(req.body);
    if (!user_exists.success) {
      return res
        .status(401)
        .json({ message: "Incorrect login credentials", body: "" });
    }

    let isCorrectPassword = await checkPassword(
      req.body.password,
      user_exists.dataValues.password
    );
    if (!isCorrectPassword) {
      return res
        .status(401)
        .json({ message: "Incorrect login credentials", body: "" });
    }

    const accessToken = generateAuthToken(user_exists.dataValues.id);
    const refreshToken = jwt.sign(
      { id: user_exists.dataValues.id },
      process.env.refreshTokenKey
    );

    return res.status(200).json({
      message: "User logged in successfully",
      body: {
        id: user_exists.dataValues.id,
        type: user_exists.dataValues.type,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const get_access_token = (req, res, next) => {
  try {
    let refreshToken = req.body.refreshToken;

    if (refreshToken == null)
      return res.status(401).json({ message: "Unauthorized", body: "" });

    const result = jwt.verify(refreshToken, process.env.refreshTokenKey);
    console.log(result.id);

    if (result) {
      const accessToken = generateAuthToken(result.id);
      res.status(200).json({
        message: "Your new access token",
        body: { accessToken: accessToken },
      });
    } else {
      res.status(403).json({ message: "Forbidden", body: "" });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { signup, login, get_access_token };
