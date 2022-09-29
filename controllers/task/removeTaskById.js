const { Task, taskSchema } = require("../../models/taskSchema");

const removeTaskById = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndRemove(id);
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json({
    message: "Task deleted",
  });
};

module.exports = removeTaskById;
