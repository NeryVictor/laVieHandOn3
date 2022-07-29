const dashboard = require("../controller/dashboardController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get( dashboard.numeroDeAtendimentos )
  .get( dashboard.numeroDePsicologos )
  .get( dashboard.numeroDePacientes )
  .get( dashboard.mediaAtendimentosPsicologos)
  
module.exports = router;