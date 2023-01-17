const schemas = require('./shemas');

const authSale = (req, res, next) => {
  const saleInfo = req.body;
  const emptyProductIdMessage = { message: '"productId" is required' };
  const emptyQuantityMessage = { message: '"quantity" is required' };
  const invalidQuantityMessage = { message: '"quantity" must be greater than or equal to 1' };
  let quantyShema = false;

  const emptyIdTest = saleInfo.every((s) => s.productId);
  const emptyQuantyTest = saleInfo.every((s) => s.quantity || s.quantity === 0);
  const validQuantyTest = saleInfo.every((s) => {
    const { error } = schemas.validateQuantity.validate(s.quantity);
    quantyShema = !error;
    return quantyShema;
  });

  if (!emptyIdTest) return res.status(400).json(emptyProductIdMessage);
  if (!emptyQuantyTest) return res.status(400).json(emptyQuantityMessage);
  if (!validQuantyTest) return res.status(422).json(invalidQuantityMessage);

  next();
};

module.exports = {
  authSale,
};