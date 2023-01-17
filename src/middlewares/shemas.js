const Joi = require('joi');

const validateIdSchema = Joi.number().integer().min(1).required();
const validateNameSchema = Joi.string().min(5);
const validateQuantity = Joi.number().positive().greater(0).required();

module.exports = {
  validateIdSchema,
  validateNameSchema,
  validateQuantity,
};