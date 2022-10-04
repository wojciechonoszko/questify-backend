const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Users, schemas } = require("../../models/usersSchema");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    res.status(400).json({ message: "Please enter name or email" });
    return;
  }
  const { email } = req.body;
  const user = await Users.findOne({ email });
  if (!user) {
    res.status(401).json({ message: "Incorrect email" });
    return;
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await Users.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
    user: {
      email,
    },
  });
};

module.exports = login;
