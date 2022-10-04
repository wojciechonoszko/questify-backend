const { Users, schemas } = require("../../models/usersSchema");
const { nanoid } = require("nanoid");

const register = async (req, res, next) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    res.status(400).json({ message: "Email is needed" });
    return;
  }
  const { email } = req.body;
  const user = await Users.findOne({ email });
  if (user) {
    res.status(409).json({ message: "User with this email alresy exists" });
  }
  try {
    const verificationToken = nanoid();
    const result = await Users.create({
      ...req.body,
      verificationToken,
    });
    res.status(201).json({ message: "User created" });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
