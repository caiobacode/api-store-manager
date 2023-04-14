const productsService = require('../services/productsService');

const getAllProducts = async (req, res) => {
  const { type, data } = await productsService.getAllProducts();

  res.status(type).json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const { type, data } = await productsService.getProductById(id);
  
  res.status(type).json(data);
};

const getProductByTerm = async (req, res) => {
  const query = Object.values(req.query)[0];
  const { type, data } = await productsService.getProductByTerm(query);
  res.status(type).json(data);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;

  const { type, data } = await productsService.insertProduct(name);

  res.status(type).json(data);
};

const changeProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, data } = await productsService.changeProduct(id, name);

  res.status(type).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await productsService.deleteProduct(id);
  res.status(type).json(data);
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByTerm,
  insertProduct,
  changeProduct,
  deleteProduct,
};