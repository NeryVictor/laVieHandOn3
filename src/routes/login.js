const express = require("express");
const router = express.Router();

const loginController = require("../controller/loginController");

const loginValidation = require("../validations/login");

router
  .route("/")
  .post(loginValidation, loginController.efetuarLogin);

module.exports = router;
