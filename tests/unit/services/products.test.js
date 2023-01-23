const sinon = require('sinon');
const { expect } = require('chai');
const { allProductsResponse, thorProduct, createdProductResponse, newProduct } = require('../../mocks/productsMock')
const productsModel = require('../../../src/models/productsModel')
const productsService = require('../../../src/services/productsService')

describe('Products Service test', () => {
  describe('Get products test', () => {
    it('Get all products', async () => {
      sinon.stub(productsModel, 'getAllProducts').resolves([allProductsResponse])
      const serviceReturn = await productsService.getAllProducts();
      expect(serviceReturn.data[0]).to.be.equal(allProductsResponse)
    })
    
    it('Get product by id test', async () => {
      sinon.stub(productsModel, 'getProductById').resolves([[thorProduct]])
      const serviceReturn = await productsService.getProductById(1);
      expect(serviceReturn.data[0][0]).to.be.equal(thorProduct)
    })

    it('Invalid ID test', async () => {
      sinon.stub(productsModel, 'getProductById').resolves(undefined)
      const notFoundMessage = { message: 'Product not found' }
      const serviceReturn = await productsService.getProductById(100);
      expect(serviceReturn.data).to.be.deep.equal(notFoundMessage)
    })
  })
  describe('Insert products test', () => {
    it('Insert product test', async () => {
      sinon.stub(productsModel, 'insertProduct').resolves(4);
      const { name } = newProduct;
      const serviceReturn = await productsService.insertProduct(name);
      expect(serviceReturn.data).to.be.deep.equal(createdProductResponse)
    })
  })
  
  afterEach(function () {
    sinon.restore();
  });
})