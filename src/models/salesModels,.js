const connection = require('./connection');

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
  return result;
};

module.exports = {
  insertSale,
  insertSaleProducts,
};