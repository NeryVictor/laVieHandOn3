const express = require("express");
const router = express.Router();
const {
  createValidation,
  updateValidation,
  deleteOrReadValidation,
} = require("../validations/psicologos");

const psicologoController = require("../controller/psicologoController");
const auth = require('../middlewares/auth');

// // creating routes and indicating methods - Psicologos
router
  .route("/")
  .post(createValidation, psicologoController.cadastrarPsicologo)
  .get(auth, psicologoController.listarPsicologos);
router
  .route("/:id")
  .get(deleteOrReadValidation, auth, psicologoController.pegarPsicologo)
  .put(updateValidation, auth, psicologoController.atualizarPsicologo)
  .delete(deleteOrReadValidation, auth, psicologoController.deletarPsicologo);

module.exports = router;
