const { Task, schemas } = require("../../models/taskSchema");

const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(result);
};

module.exports = updateTaskById;
