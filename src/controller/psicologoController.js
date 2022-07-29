const { Psicologos, Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");

const psicologoController = {
  async listarPsicologos(req, res) {
    const listaDePsicologos = await Psicologos.findAll({
      include: Atendimentos,
    });
    res.status(200).json(listaDePsicologos);
  },

  async pegarPsicologo(req, res) {
    const { id } = req.params;
    try {
      const psicologo = await Psicologos.findByPk(id);
      if (!psicologo) throw new Error("Psicologo não encontrado");
      return res.status(200).json(psicologo);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },

  async cadastrarPsicologo(req, res) {
    const { nome, email, senha, apresentacao } = req.body;
    try {
      const psicologo = await Psicologos.findOne({
        where: {
          email,
        },
      });
      if (psicologo) throw new Error("Email já cadastrado");
      const hashSenha = bcrypt.hashSync(senha, 10);
      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha: hashSenha,
        apresentacao,
      });

      return res.json(novoPsicologo);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },

  async deletarPsicologo(req, res) {
    const { id } = req.params;
    try {
      const psicologoASerDeletado = await Psicologos.findByPk(id);
      if (!psicologoASerDeletado) throw new Error("Psicologo não encontrado!");
      await Psicologos.destroy({
        where: { id },
      });
      return res.status(204).json("Psicologo deletado com sucesso!");
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },

  async atualizarPsicologo(req, res) {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    try {
      const psicologoAtualizado = await Psicologos.findByPk(id);
      if (!psicologoAtualizado) throw new Error("Psicologo não encontrado!");
      psicologoAtualizado.update({
        nome,
        email,
        senha,
        apresentacao,
      });
      return res.status(200).json(psicologoAtualizado);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },
};

module.exports = psicologoController;
