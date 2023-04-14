//  Iniciando projeto

const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');
const { authProductName } = require('./middlewares/validateInsertProduct');
const { authId } = require('./middlewares/validateId');
const { authSale } = require('./middlewares/validateSale');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAllProducts);

app.get('/products/search', productsController.getProductByTerm);

app.get('/products/:id', authId, productsController.getProductById);

app.post('/products', authProductName, productsController.insertProduct);

app.put('/products/:id', authId, authProductName, productsController.changeProduct);

app.delete('/products/:id', productsController.deleteProduct);

app.get('/sales', salesController.getSales);

app.get('/sales/:id', authId, salesController.getSaleById);

app.post('/sales', authSale, salesController.insertSale);

app.put('/sales/:id', authId, authSale, salesController.changeSale);

app.delete('/sales/:id', salesController.deleteSale);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;