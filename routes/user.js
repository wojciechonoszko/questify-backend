const express = require("express");
const router = express.Router();
const user = require("../controllers/users/");

router.post("/register", user.register);
router.get("/verify/:verificationToken", user.userVerify);

module.exports = router;
