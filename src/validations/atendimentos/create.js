const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        paciente_id: Joi.number().required(),
        //psicologo_id: Joi.number().required(), /* esse parametro apos implementado o login vira pelo JWT */
        data_atendimento: Joi.date().iso().required(),
        observacao: Joi.string().required(),
    })
})
