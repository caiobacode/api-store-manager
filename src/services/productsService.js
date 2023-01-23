const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();

  if (allProducts.length === 0) return { type: 404, data: { message: 'Products Not Found' } };

  return { type: 200, data: allProducts };
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);

  if (!product) return { type: 404, data: { message: 'Product not found' } };

  return { type: 200, data: product };
};

const insertProduct = async (name) => {
  const productId = await productsModel.insertProduct({ name });
  const newProduct = {
    id: productId,
    name,
  };
  return { type: 201, data: newProduct };
};

const changeProduct = async (id, name) => {
  const product = await productsModel.changeProduct(id, name);
  if (product === 0) return { type: 404, data: { message: 'Product not found' } };
  const newData = {
    id,
    name,
  };

  return { type: 200, data: newData };
};

const deleteProduct = async (id) => {
  const returnModel = await productsModel.deleteProduct(id);

  console.log(returnModel);

  if (returnModel.affectedRows === 0) return { type: 404, data: { message: 'Product not found' } };

  return { type: 204, data: '' };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  changeProduct,
  deleteProduct,
};