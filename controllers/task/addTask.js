const { Task, taskSchema } = require("../../models/taskSchema");

const addTask = async (req, res) => {
  const result = await Task.create(req.body);
  res.status(201).json(result);
};

module.exports = addTask;
