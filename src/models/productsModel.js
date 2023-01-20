const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [response] = await connection.execute(query);
  return response;
};

const getProductById = async (id) => {
  const [[response]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return response;
};

const insertProduct = async (product) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE (?)';
  const [{ insertId }] = await connection.execute(query, [product]);
  return insertId;
};

const changeProduct = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = (?) WHERE id = ?';
  const [{ affectedRows }] = await connection.execute(query, [name, id]);
  return affectedRows;
};

const deleteProduct = async (id) => {
  const query = 'DELETE from StoreManager.products WHERE id = ?';
  const [response] = await connection.execute(query, [id]);
  return response;
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  changeProduct,
  deleteProduct,
};