const schemas = require('./shemas');

const authId = (req, res, next) => {
  const { id } = req.params;
  const { error } = schemas.validateIdSchema.validate(id);
  const invalidIdMessage = 'id must be a number';

  if (error) return res.status(500).json(invalidIdMessage);

  next();
};  

module.exports = {
  authId,
};