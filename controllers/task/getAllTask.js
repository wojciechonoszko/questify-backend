const { Task } = require("../../models/taskSchema");

const getAllTask = async (req, res) => {
  const result = await Task.find({});
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(result);
};

module.exports = getAllTask;
