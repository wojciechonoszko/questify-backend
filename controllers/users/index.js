const register = require("./register");
const userVerify = require("./userVerify");
const deleteUser = require("./deleteUser");
const logout = require("./logout");
const login = require("./login");
const currentUser = require("./currentUser");

module.exports = {
  register,
  userVerify,
  deleteUser,
  logout,
  login,
  currentUser,
};
