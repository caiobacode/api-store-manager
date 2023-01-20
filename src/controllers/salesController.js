const salesService = require('../services/salesService');

const insertSale = async (req, res) => {
  const { type, data } = await salesService.insertSale(req.body);

  res.status(type).json(data);
};

const getSales = async (req, res) => {
  const { type, data } = await salesService.getSales();
  
  res.status(type).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await salesService.getSaleById(id);

  res.status(type).json(data);
};

const changeSale = async (req, res) => {
  const { id } = req.params;
  const newSale = req.body;

  const { type, data } = await salesService.changeSale(id, newSale);

  res.status(type).json(data);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  const { type, data } = await salesService.deleteSale(id);

  res.status(type).json(data);
};

module.exports = {
  insertSale,
  getSales,
  getSaleById,
  changeSale,
  deleteSale,
};