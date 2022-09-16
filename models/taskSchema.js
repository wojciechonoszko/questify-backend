const { Schema, model } = require("mongoose");
const Joi = require("joi");

const taskSchema = new Schema(
  {
    difficulty: {
      type: String,
      enum: ["Easy", "Normal", "Hard"],
      default: "Normal",
    },
    favorite: {
      type: Boolean,
      default: false,
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
    done: {
      type: Boolean,
      default: false,
    },
    challenge: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const taskAddSchema = Joi.object({
  difficulty: Joi.string(),
  favorite: Joi.boolean(),
  task: Joi.string().required(),
  type: Joi.string(),
  data: Joi.string().required(),
  done: Joi.boolean(),
});

const schemas = {
  taskAddSchema: taskAddSchema,
};

const Task = model("task", taskSchema);

module.exports = {
  Task,
  schemas,
};
