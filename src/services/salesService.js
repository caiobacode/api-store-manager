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

const getSales = async () => {
  const salesProducts = await salesModels.getSalesProducts();
  const sales = await salesModels.getAllSales();

  const newSales = salesProducts.map((s) => {
    const saleFiltered = sales.find((sale) => sale.id === s.sale_id);
    const ns = {
      saleId: s.sale_id,
      date: saleFiltered.date,
      productId: s.product_id,
      quantity: s.quantity,
    };
    return ns;
  });

  return { type: 200, data: newSales };
};

const getSaleById = async (id) => {
  const salesProducts = await salesModels.getSalesProducts();
  const sales = await salesModels.getAllSales();

  const newProducts = salesProducts.filter((sale) => sale.sale_id === Number(id));
  if (newProducts.length === 0) return { type: 404, data: { message: 'Sale not found' } };

  const newData = newProducts.map((p) => {
    const findData = sales.find((s) => s.id === Number(id)).date;
    const np = {
      date: findData,
      productId: p.product_id,
      quantity: p.quantity,
    };
    return np;
  });
  
  return { type: 200, data: newData };
};

module.exports = {
  insertSale,
  getSales,
  getSaleById,
};