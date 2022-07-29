const { Psicologos } = require("../models");
const JWT = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcryptjs");

const loginController = {
  async efetuarLogin(req, res) {
    const { email, senha } = req.body;
    try {
      const psicologo = await Psicologos.findOne({
        where: {
          email,
        },
      });
      if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha))
        throw new Error("Email ou senha inválidos");
      const token = JWT.sign(
        {
          id: psicologo.id,
          email: psicologo.email,
          nome: psicologo.nome,
        },
        secret.key
      );
      return res.status(200).json(token);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
};

module.exports = loginController;
