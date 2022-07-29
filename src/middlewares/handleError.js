const { ValidationError } = require("express-validation");
const { UnauthorizedError } = require("express-jwt");

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError)
    res.status(error.statusCode).json(error);
  if (error instanceof UnauthorizedError)
    res.status(error.status).json(error);
  return res.status(500).json(error);
};
