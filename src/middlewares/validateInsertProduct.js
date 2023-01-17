const schemas = require('./shemas');

const authProductName = (req, res, next) => {
  const { name } = req.body;
  const { error } = schemas.validateNameSchema.validate(name);

  const emptyNameMessage = '"name" is required';
  const invalidNameMessage = '"name" length must be at least 5 characters long';

  if (!name) return res.status(400).json({ message: emptyNameMessage });
  if (error) return res.status(422).json({ message: invalidNameMessage });
  next();
};

module.exports = {
  authProductName,
};