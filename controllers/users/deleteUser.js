const { Users } = require("../../models/usersSchema");

const removeUserById = async (req, res) => {
  const { id } = req.params;
  const result = await Users.findByIdAndRemove(id);
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json({
    message: "User deleted",
  });
};

module.exports = removeUserById;
