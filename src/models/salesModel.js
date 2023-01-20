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
  return result;
};

const changeSale = async (newProductId, newQuantity, saleId, oldProductId) => {
  const query1 = 'UPDATE StoreManager.sales_products SET product_id = ?,';
  const query2 = 'quantity = ? WHERE sale_id = ? AND product_id = ?';
  const actualQuery = `${query1} ${query2}`;
  const [result] = await connection.execute(
    actualQuery, [newProductId, newQuantity, saleId, oldProductId],
  );
  return result;
};

const deleteSale = async (id) => {
  const query = 'DELETE from StoreManager.sales WHERE id = ?';
  const [response] = await connection.execute(query, [id]);
  return response;
};

module.exports = {
  getSalesProducts,
  getAllSales,
  insertSale,
  insertSaleProducts,
  changeSale,
  deleteSale,
};