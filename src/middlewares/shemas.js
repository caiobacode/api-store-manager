const Joi = require('joi');

const validateIdSchema = Joi.number().integer().min(1).required();
const validateNameSchema = Joi.string().min(5);

module.exports = {
  validateIdSchema,
  validateNameSchema,
};