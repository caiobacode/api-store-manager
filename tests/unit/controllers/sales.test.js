const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { allSalesResponse,
  allSalesProductsResponse,
  salesServiceResponse,
  oneSaleResponse,
} = require('../../mocks/productsMock')

const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController')

describe('Sales controller test', () => {
  describe('Get sales test', () => {
    it('Get all sales', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSales').resolves({ type: 200, data: allSalesResponse});

      await salesController.getSales(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allSalesResponse)
    })
    it('Get sale by id', async () => {
      const res = {};
      const req = { params: { id: 1}};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSaleById').resolves({ type: 200, data: oneSaleResponse});

      await salesController.getSaleById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(oneSaleResponse)
    })
    
    afterEach(function () {
      sinon.restore();
    });
  })
  describe('Delete sales test', () => {
    it('Delete sale test', async () => {
      const res = {};
      const req = { params: { id: 1}};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'deleteSale').resolves({ type: 204, data: ''});

      await salesController.deleteSale(req, res);
      expect(res.status).to.have.been.calledWith(204);
      expect(res.json).to.have.been.calledWith('')
    })
    
    afterEach(function () {
      sinon.restore();
    });
  })
  
});