const salesModels = require('../models/salesModels,');
const productsModel = require('../models/productsModel');

const insertSale = async (sale) => {
  const allProducts = await productsModel.getAllProducts();
  
  const productExists = sale.map((s) => allProducts.some((p) => p.id === s.productId));
  if (productExists.some((p) => !p)) return { type: 404, data: { message: 'Product not found' } };

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