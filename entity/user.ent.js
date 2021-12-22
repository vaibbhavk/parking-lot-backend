const User = require("../models/user.mod");

const get_user = async (payload) => {
  try {
    let email = payload.email;
    let check_user = await User.findOne({ where: { email: email } });
    if (check_user) {
      return { ...check_user, success: true };
    } else {
      return { ...check_user, success: false };
    }
  } catch (error) {
    console.error(error);
  }
};

const save_user = async (data) => {
  console.log(data)
  let user = await User.create({
    email: data.email,
    password: data.password,
    name: data.name,
    phone: data.phone,
    address: data.address,
    type: data.type,
  });
  return user;
};

module.exports = { get_user, save_user };
