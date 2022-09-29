const { verify } = require("jsonwebtoken");
const { Users } = require("../../models/usersSchema");

const userVerify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await Users.findOne({ verificationToken });
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  await Users.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });
  res.json({ message: "Verification successful" });
};

module.exports = userVerify;
