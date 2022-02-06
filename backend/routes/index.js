const express = require("express");
const registerController = require("../controller/auth/registerController");
const router = express.Router();

router.get("/register", registerController.register);

module.exports = router;
