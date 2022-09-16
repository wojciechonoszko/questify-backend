const { Task, taskSchema } = require("../../models/taskSchema");

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findById(id);
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(result);
};

module.exports = getTaskById;
