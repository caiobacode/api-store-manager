const schemas = require('./shemas');

const validateId = (id) => {
  const { error } = schemas.validateIdSchema.validate(id);
  return error;
};  

module.exports = {
  validateId,
};