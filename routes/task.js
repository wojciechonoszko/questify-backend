const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

router.get("/all", task.getAllTask);
router.post("/add", task.addTask);
router.get("/:id", task.getTaskById);
router.delete("/:id", task.removeTaskById);
router.put("/:id", task.updateTaskById);

module.exports = router;
