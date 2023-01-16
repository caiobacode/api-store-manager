const { validateId } = require('../middlewares/validateId');
const productsService = require('../services/productsService');

const getAllProductsController = () => productsService.getAllProductsService();

const getProductByIdController = (id) => {
  if (validateId(id)) return { type: 500, data: { message: 'id must be a number' } };
  
  return productsService.getProductByIdService(id);
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
};