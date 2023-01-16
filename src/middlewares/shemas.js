const Joi = require('joi');

const validateIdSchema = Joi.number().integer().min(1).required();

module.exports = {
  validateIdSchema,
};