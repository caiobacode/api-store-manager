const sinon = require('sinon');
const { expect } = require('chai');
const { allSalesResponse,
  allSalesProductsResponse,
  salesServiceResponse,
  saleCreateResponse,
  insertSaleProductsResponse,
  oneSaleResponse,
  changeSaleRes,
  newSaleReq,
  allProductsResponse,
} = require('../../mocks/productsMock')
const salesModel = require('../../../src/models/salesModel')
const productsModel = require('../../../src/models/productsModel')
const salesService = require('../../../src/services/salesService')

describe('Sales Service test', () => {
  describe('Get sales test', () => {
    it('Get all sales', async () => {
      sinon.stub(salesModel, 'getAllSales').resolves(allSalesResponse)
      sinon.stub(salesModel, 'getSalesProducts').resolves(allSalesProductsResponse)
      const serviceReturn = await salesService.getSales();
      expect(serviceReturn).to.be.deep.equal({ type: 200, data: [ ...salesServiceResponse ]})
    })
    it('Get sale by id', async () => {
      sinon.stub(salesModel, 'getAllSales').resolves(allSalesResponse)
      sinon.stub(salesModel, 'getSalesProducts').resolves(allSalesProductsResponse)
      const serviceReturn = await salesService.getSaleById(1);
      expect(serviceReturn).to.be.deep.equal({ type: 200, data: oneSaleResponse })
    })
  })
  describe('Insert sales test', () => {
    it('Insert sales test', async () => {
      sinon.stub(productsModel, 'getAllProducts').resolves(allProductsResponse)
      sinon.stub(salesModel, 'insertSale').resolves(3);
      sinon.stub(salesModel, 'insertSaleProducts').resolves(3);
      const serviceReturn = await salesService.insertSale(newSaleReq);
      expect(serviceReturn.data).to.be.deep.equal(saleCreateResponse)
    })
  })

  describe('Change sales test', () => {
    it('Change sales test', async () => {
      sinon.stub(productsModel, 'getAllProducts').resolves(allProductsResponse)
      sinon.stub(salesModel, 'changeSale').resolves(insertSaleProductsResponse);
      const serviceReturn = await salesService.changeSale(1, newSaleReq);
      expect(serviceReturn.data).to.be.deep.equal(changeSaleRes)
    })
  })

  describe('Delete sales test', () => {
    it('Delete sale test', async () => {
      sinon.stub(salesModel, 'deleteSale').resolves(insertSaleProductsResponse);
      const serviceReturn = await salesService.deleteSale(1);
      expect(serviceReturn.data).to.be.deep.equal('')
    })
  })
  afterEach(function () {
    sinon.restore();
  });
})