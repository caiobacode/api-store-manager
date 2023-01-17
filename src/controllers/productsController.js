const productsService = require('../services/productsService');

const getAllProductsController = async (req, res) => {
  const { type, data } = await productsService.getAllProductsService();

  res.status(type).json(data);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;

  const { type, data } = await productsService.getProductByIdService(id);
  
  res.status(type).json(data);
};

const insertProductController = async (req, res) => {
  const { name } = req.body;

  const { type, data } = await productsService.insertProductService(name);

  res.status(type).json(data);
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  insertProductController,
};