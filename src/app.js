//  Iniciando projeto

const express = require('express');
const productsController = require('./controllers/productsController');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (req, res) => { 
  const { type, data } = await productsController.getAllProductsController();
  res.status(type).json(data);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { type, data } = await productsController.getProductByIdController(id);
  res.status(type).json(data);
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;