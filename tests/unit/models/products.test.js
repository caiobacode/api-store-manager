const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { allProductsResponse, newProduct } = require('../../mocks/productsMock')
const  productsModel  = require('../../../src/models/productsModel')

describe('Products model test', () => {
  describe('Get products test', () => {
    it('Get all products', async () => {
      sinon.stub(connection, 'execute').resolves([allProductsResponse])
      const modelReturn = await productsModel.getAllProducts();
      expect(modelReturn).to.be.equal(allProductsResponse)
    })
    
    it('Get product by id test', async () => {
      sinon.stub(connection, 'execute').resolves([[newProduct]])
      const modelReturn = await productsModel.getProductById(1);
      expect(modelReturn).to.be.equal(newProduct)
    })
    it('Invalid ID test', async () => {
      sinon.stub(connection, 'execute').resolves([[undefined]])
      const notFoundMessage = { message: 'Product not found' }
      const modelReturn = await productsModel.getProductById(100);
      expect(modelReturn).to.be.deep.equal(undefined)
    })
  })

  afterEach(function () {
    sinon.restore();
  });
})