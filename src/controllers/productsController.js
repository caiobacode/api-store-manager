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

const insertProduct = async (req, res) => {
  const { name } = req.body;

  const { type, data } = await productsService.insertProductService(name);

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
  insertProduct,
  changeProduct,
  deleteProduct,
};