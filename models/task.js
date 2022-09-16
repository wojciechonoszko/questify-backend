const { Schema, model } = require("mongoose");
const Joi = require("joi");

const taskSchema = new Schema({
  difficulty: {
    type: String,
    enum: ["Easy", "Normal", "Hard"],
    default: "Normal",
  },
  favorite: {
    type: String,
    required: false,
  },
  task: {
    type: String,
    required: [true, "Task is required"],
  },
  type: {
    type: String,
    enum: ["Stuff", "Family", "Health", "Learning", "Leisure", "Work"],
    default: "Stuff",
  },
  data: {
    type: String,
    required: true,
  },
});

const addTaskSchema = Joi.object({
  difficulty: Joi.string().required(),
  favorite: Joi.string().required(),
  task: Joi.string().required(),
  type: Joi.string().required(),
  data: Joi.string().required(),
});

module.exports = {
  taskSchema,
  addTaskSchema,
};
