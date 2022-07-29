const { Atendimentos, Pacientes } = require("../models");

const atendimentoController = {
  async listarAtendimentos(req, res) {
    const listaDeAtendimentos = await Atendimentos.findAll();
    return res.status(200).json(listaDeAtendimentos);
  },

  async pegarAtendimento(req, res) {
    const { id } = req.params;
    try {const listaDeAtendimentoId = await Atendimentos.findByPk(id);
    if (!listaDeAtendimentoId) throw new Error ("Atendimento não encontrando");
    return res.status(200).json(listaDeAtendimentoId);
  } catch(error) {
    return res.status(404).json(error.message);
  }
  },

  async cadastrarAtendimento(req, res) {
    const {
      data_atendimento,
      observacao,
      paciente_id,
    } = req.body;
   const psicologo_id = req.auth.id;  
    try {
      const paciente = await Pacientes.findByPk(paciente_id);
      if (!paciente) throw new Error("Paciente não encontrado.");
      const novoAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        paciente_id,
        psicologo_id,
      });
      return res.status(200).json(novoAtendimento);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },
};

module.exports = atendimentoController;
