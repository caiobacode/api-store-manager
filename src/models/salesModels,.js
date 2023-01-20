const connection = require('./connection');

const getSalesProducts = async () => {
  const query = 'SELECT * FROM StoreManager.sales_products';
  const [response] = await connection.execute(query);
  return response;
};

const getAllSales = async () => {
  const query = 'SELECT * FROM StoreManager.sales';
  const [response] = await connection.execute(query);
  return response;
};

const insertSale = async () => {
  const query = 'INSERT INTO StoreManager.sales () VALUES ();';
  const [{ insertId }] = await connection.execute(query);
  return insertId;
};

const insertSaleProducts = async (saleId, productId, quantity) => {
  const query1 = 'INSERT INTO StoreManager.sales_products';
  const query2 = '(sale_id, product_id, quantity) VALUES (?, ?, ?);';
  const actualQuery = `${query1} ${query2}`;
  const [result] = await connection.execute(actualQuery, [saleId, productId, quantity]);
  console.log('vim aqui');
  return result;
};

module.exports = {
  getSalesProducts,
  getAllSales,
  insertSale,
  insertSaleProducts,
};