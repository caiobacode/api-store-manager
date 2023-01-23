const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { allProductsResponse, newProduct } = require('../../mocks/productsMock')
const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController')

describe('Products controller test', () => {
  describe('Get products test', () => {
    it('Get all products test', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAllProducts').resolves({ type: 200, data: allProductsResponse });

      await productsController.getAllProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProductsResponse)
    })
    it('Get product by id test', async () => {
      const res = {};
      const req = { params: { id: 1}};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getProductById').resolves({ type: 200, data: newProduct });

      await productsController.getProductById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(newProduct)
    })
    it('Invalid id test', async () => {
      const res = {};
      const req = { params: { id: 100}};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const notFoundMessage = { message: 'Product not found'}
      sinon.stub(productsService, 'getProductById').resolves({ type: 404, data: notFoundMessage });

      await productsController.getProductById(req, res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(notFoundMessage)
    })
    
    afterEach(function () {
      sinon.restore();
    });
  })

});