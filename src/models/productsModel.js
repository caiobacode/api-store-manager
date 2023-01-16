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

module.exports = {
  getAllProducts,
  getProductById,
};