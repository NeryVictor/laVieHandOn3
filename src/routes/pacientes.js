const express = require("express");
const router = express.Router();

const pacienteController = require("../controller/pacienteController");
const {
  createValidation,
  updateValidation,
  deleteOrReadValidation,
} = require("../validations/pacientes");
const auth = require("../middlewares/auth");

router
  .route("/")
  .post(createValidation, auth, pacienteController.cadastrarPaciente)
  .get(auth, pacienteController.listarPacientes);
router
  .route("/:id")
  .get(deleteOrReadValidation, auth, pacienteController.pegarPaciente)
  .put(updateValidation, auth, pacienteController.atualizarPaciente)
  .delete(deleteOrReadValidation, auth, pacienteController.deletarPaciente);

module.exports = router;
