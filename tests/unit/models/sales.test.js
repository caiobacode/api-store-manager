const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { allSalesResponse, allSalesProductsResponse, insertSaleProductsResponse} = require('../../mocks/productsMock')
const  salesModel  = require('../../../src/models/salesModel')

describe('Sales model test', () => {
  describe('Get sales test', () => {
    it('Get all sales', async () => {
      sinon.stub(connection, 'execute').resolves([allSalesResponse]);
      const modelReturn = await salesModel.getAllSales();
      expect(modelReturn).to.be.equal(allSalesResponse);
    });
    
    it('Get sale products test', async () => {
      sinon.stub(connection, 'execute').resolves([allSalesProductsResponse]);
      const modelReturn = await salesModel.getSalesProducts();
      expect(modelReturn).to.be.equal(allSalesProductsResponse);
    });
  });
  describe('Insert sales test', () => {
    it('Insert sale', async () => {
      sinon.stub(connection, 'execute').resolves([{insertId: 3}]);
      const modelReturn = await salesModel.insertSale();
      expect(modelReturn).to.be.equal(3);
    });
    it('Insert sale products', async () => {
      sinon.stub(connection, 'execute').resolves([insertSaleProductsResponse]);
      const modelReturn = await salesModel.insertSaleProducts(3, 2, 5);
      expect(modelReturn).to.be.equal(insertSaleProductsResponse);
    });
  });
  describe('Delete sales test', () => {
    it('Delete sale', async () => {
      sinon.stub(connection, 'execute').resolves([insertSaleProductsResponse]);
      const modelReturn = await salesModel.deleteSale(1);
      expect(modelReturn).to.be.equal(insertSaleProductsResponse);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
})