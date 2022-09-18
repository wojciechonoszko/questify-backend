const { Schema, model } = require("mongoose");
const Joi = require("joi");

const usersSchema = new Schema(
  {
    emile: {
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
  emile: Joi.string().required(),
});

const Users = model("users", userSchema);

module.exports = {
  Users,
  usersVerSchema,
};
