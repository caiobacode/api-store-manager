const productsModel = require('../models/productsModel');

const getAllProductsService = async () => {
  const allProducts = await productsModel.getAllProducts();

  if (allProducts.length === 0) return { type: 404, data: { message: 'Products Not Found' } };

  return { type: 200, data: allProducts };
};

const getProductByIdService = async (id) => {
  const product = await productsModel.getProductById(id);

  if (!product) return { type: 404, data: { message: 'Product not found' } };

  return { type: 200, data: product };
};

const insertProductService = async (name) => {
  const productId = await productsModel.insertProduct({ name });
  const newProduct = {
    id: productId,
    name,
  };
  return { type: 201, data: newProduct };
};

module.exports = {
  getAllProductsService,
  getProductByIdService,
  insertProductService,
};