const { Task, taskSchema } = require("../../models/taskSchema");

const getTaskById = async (req, res) => {
  const { id } = req.params;
  if (id.length < 12) {
    res.status(400).json({ message: "ID must be a string of 12" });
    return;
  }
  const result = await Task.findById(id);
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(result);
};

module.exports = getTaskById;
