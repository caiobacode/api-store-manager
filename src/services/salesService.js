const salesModels = require('../models/salesModels,');

const insertSale = async (sale) => {
  const newSale = await salesModels.insertSale(sale);
  return newSale;
};

module.exports = {
  insertSale,
};