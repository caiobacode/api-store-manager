const { validateId } = require('../middlewares/validateId');
const productsService = require('../services/productsService');

const getAllProductsController = async (req, res) => {
  const { type, data } = await productsService.getAllProductsService();
  res.status(type).json(data);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;

  if (validateId(id)) return { type: 500, data: { message: 'id must be a number' } };

  const { type, data } = await productsService.getProductByIdService(id);
  
  res.status(type).json(data);
};

const postProductController = async (req, res) => {
  const { name } = req.body;

  const { type, data } = await productsService.postProductService(name);
  res.status(type).json(data);
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  postProductController,
};