const { Schema, model } = require("mongoose");
const Joi = require("joi");

const usersSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please type your email"],
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    verify: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const usersVerSchema = Joi.object({
  email: Joi.string().required(),
});

const schemas = {
  login: usersVerSchema,
  register: usersVerSchema,
};

const Users = model("users", usersSchema);

module.exports = {
  Users,
  schemas,
};
