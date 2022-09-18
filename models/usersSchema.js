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
  },
  { versionKey: false, timestamps: true }
);

const usersVerSchema = Joi.object({
  email: Joi.string().required(),
});

const Users = model("users", usersSchema);

module.exports = {
  Users,
  usersVerSchema,
};
