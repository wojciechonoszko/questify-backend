const { Users } = require("../../models/usersSchema");

const logout = async (req, res) => {
  const { id } = req.user;
  await Users.findByIdAndUpdate(id, { token: "" });
  res.status(204).json({ message: "User logout" });
};

module.exports = logout;
