const express = require("express");
const router = express.Router();
const atendimentoController = require("../controller/atendimentoController");
const auth = require('../middlewares/auth');

const {
  createValidation,
  deleteOrReadValidation,
} = require("../validations/atendimentos");

router
  .route("/")
  .get(auth, atendimentoController.listarAtendimentos)
  .post(createValidation, auth, atendimentoController.cadastrarAtendimento);

router.route("/:id").get(deleteOrReadValidation, auth, atendimentoController.pegarAtendimento);

module.exports = router;
