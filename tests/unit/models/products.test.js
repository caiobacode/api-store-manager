const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { allProductsResponse, thorProduct, newProduct } = require('../../mocks/productsMock')
const  productsModel  = require('../../../src/models/productsModel')

describe('Products model test', () => {
  describe('Get products test', () => {
    it('Get all products', async () => {
      sinon.stub(connection, 'execute').resolves([allProductsResponse]);
      const modelReturn = await productsModel.getAllProducts();
      expect(modelReturn).to.be.equal(allProductsResponse);
    });
    
    it('Get product by id test', async () => {
      sinon.stub(connection, 'execute').resolves([[thorProduct]]);
      const modelReturn = await productsModel.getProductById(1);
      expect(modelReturn).to.be.equal(thorProduct);
    });
    it('Invalid ID test', async () => {
      sinon.stub(connection, 'execute').resolves([[undefined]]);
      const modelReturn = await productsModel.getProductById(100);
      expect(modelReturn).to.be.deep.equal(undefined);
    })
  });
  describe('Insert products test', () => {
    it('Insert product test', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
      const { name } = newProduct;
      const modelReturn = await productsModel.insertProduct({ name });
      expect(modelReturn).to.be.equal(4);
    })
  });

  afterEach(function () {
    sinon.restore();
  });
})