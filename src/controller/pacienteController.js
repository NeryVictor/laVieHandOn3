const { Pacientes, Atendimentos } = require("../models");

const pacienteController = {
  async listarPacientes(req, res) {
    const listaDePaciente = await Pacientes.findAll({
      include: Atendimentos,
    });
    res.json(listaDePaciente);
  },

  async pegarPaciente(req, res) {
    const { id } = req.params;
    try {
      const paciente = await Pacientes.findByPk(id);
      if (!paciente) throw new Error("Paciente não encontrado.");
      res.status(200).json(paciente); 
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },

  async cadastrarPaciente(req, res) {
    const { nome, email, idade } = req.body;
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      idade,
    });

    res.json(novoPaciente);
  },

  async deletarPaciente(req, res) {
    const { id } = req.params;
    try {
      const paciente = await Pacientes.findByPk(id);
      if (!paciente) throw new Error("Paciente não encontrado.");
      await Pacientes.destroy({
        where: { id },
      });
      res.json("Deletado com sucesso!"); 
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },

  async atualizarPaciente(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;
    try {
      const paciente = await Pacientes.findByPk(id);
      if (!paciente) throw new Error("Paciente não encontrado.");
      paciente.update({
        nome,
        email,
        idade,
      });
      return res.status(200).json(paciente); 
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },
};

module.exports = pacienteController;
