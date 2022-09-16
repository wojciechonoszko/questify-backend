const { Task, schemas } = require("../../models/taskSchema");

const addTask = async (req, res) => {
  const { error } = schemas.taskAddSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: "missing required name field" });
    return;
  }
  const result = await Task.create(req.body);
  res.status(201).json(result);
};

module.exports = addTask;
