//  Iniciando projeto

const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');
const { authProductName } = require('./middlewares/validateInsertProduct');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAllProductsController);

app.get('/products/:id', productsController.getProductByIdController);

app.post('/products', authProductName, productsController.postProductController);

app.post('sales', salesController.postSale);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;