const salesService = require('../services/salesService');

const insertSale = async (req, res) => {
  const { type, data } = await salesService.insertSale(req.body);

  res.status(type).json(data);
};

module.exports = {
  insertSale,
};