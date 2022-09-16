const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

router.get("/all", task.getAllTask);
router.post("/add", task.addTask);
// router.get("/all", (req, res) => {
//   res.send("About");
// });

module.exports = router;
