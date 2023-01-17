const salesModels = require('../models/salesModels,');

const insertSale = async (sale) => {
  const newSaleId = await salesModels.insertSale(sale);
  sale.map(async (s) => {
    await salesModels.insertSaleProducts(newSaleId, s.productId, s.quantity);
  });

  const newData = {
    id: newSaleId,
    itemsSold: sale,
  };

  return { type: 201, data: newData };
};

module.exports = {
  insertSale,
};