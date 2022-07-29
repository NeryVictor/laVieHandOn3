const createValidation = require('./create');
const updateValidation = require('./update');
const deleteOrReadValidation = require('./deleteOrRead');

module.exports = {
    createValidation,
    updateValidation,
    deleteOrReadValidation,
}