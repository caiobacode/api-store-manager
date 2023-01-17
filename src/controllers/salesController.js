const salesService = require('../services/salesService');

const postSale = async (req, res) => {
  const sale = await salesService.insertSale({ name: 'sale' });
  res.status(201).json(sale);
};

module.exports = {
  postSale,
};