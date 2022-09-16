const { Task } = require("../../models/taskSchema");

const getAllTask = async (req, res) => {
  const result = await Task.find({});
  res.json(result);
};

module.exports = getAllTask;
