const jwt = require("jsonwebtoken");
const { Users } = require("../models/usersSchema");
const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(res.status(401).json({ message: "Not authorized" }));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await Users.findById(id);
    if (!user || !user.token) {
      next(res.status(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(res.status(401).json({ message: "Not authorized" }));
  }
};

module.exports = auth;
