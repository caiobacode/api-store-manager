const salesModel = require('../models/salesModel');
const productsModel = require('../models/productsModel');

const insertSale = async (sale) => {
  const allProducts = await productsModel.getAllProducts();
  
  const productExists = sale.map((s) => allProducts.some((p) => p.id === s.productId));
  if (productExists.some((p) => !p)) return { type: 404, data: { message: 'Product not found' } };

  const newSaleId = await salesModel.insertSale(sale);
  sale.map(async (s) => {
    await salesModel.insertSaleProducts(newSaleId, s.productId, s.quantity);
  });

  const newData = {
    id: newSaleId,
    itemsSold: [
      ...sale,
    ],
  };

  return { type: 201, data: newData };
};

const getSales = async () => {
  const salesProducts = await salesModel.getSalesProducts();
  const sales = await salesModel.getAllSales();

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
  const salesProducts = await salesModel.getSalesProducts();
  const sales = await salesModel.getAllSales();

  const newProducts = salesProducts.filter((sale) => sale.sale_id === Number(id));
  if (newProducts.length === 0) return { type: 404, data: { message: 'Sale not found' } };
  
  const newData = newProducts.map((p) => {
    const findData = sales.find((s) => s.id === Number(id));
    const np = {
      date: findData.date,
      productId: p.product_id,
      quantity: p.quantity,
    };
    return np;
  });
  
  return { type: 200, data: newData };
};

const changeSale = async (id, newSale) => {
  const { data } = await getSaleById(id);
  const allProducts = await productsModel.getAllProducts();

  const productExists = newSale.map((s) => allProducts.some((p) => p.id === s.productId));
  if (productExists.some((p) => !p)) return { type: 404, data: { message: 'Product not found' } };
  
  if (data.message) return { type: 404, data: { ...data } };

  const promises = data.map(async (s, index) => {
    const { productId } = newSale[index];
    const { quantity } = newSale[index];
    const oldParams = { productId: s.productId, quantity: s.quantity };
    await salesModel.changeSale(productId, quantity, id, oldParams);
  });

  const newData = { saleId: id, itemsUpdated: [...newSale] };

  await Promise.all(promises);

  return { type: 200, data: newData };
};

const deleteSale = async (id) => {
  const returnModel = await salesModel.deleteSale(id);

  if (returnModel.affectedRows === 0) return { type: 404, data: { message: 'Sale not found' } };

  return { type: 204, data: '' };
};

module.exports = {
  insertSale,
  getSales,
  getSaleById,
  changeSale,
  deleteSale,
};