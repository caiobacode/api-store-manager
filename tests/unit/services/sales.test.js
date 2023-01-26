const sinon = require('sinon');
const { expect } = require('chai');
const { allSalesResponse, allSalesProductsResponse, salesServiceResponse } = require('../../mocks/productsMock')
const salesModel = require('../../../src/models/salesModel')
const salesService = require('../../../src/services/salesService')

describe('Products Service test', () => {
  describe('Get sales test', () => {
    it('Get all sales', async () => {
      sinon.stub(salesModel, 'getAllSales').resolves(allSalesResponse)
      sinon.stub(salesModel, 'getSalesProducts').resolves(allSalesProductsResponse)
      const serviceReturn = await salesService.getSales();
      expect(serviceReturn).to.be.deep.equal({ type: 200, data: [ ...salesServiceResponse ]})
    })
  })
  afterEach(function () {
    sinon.restore();
  });
})