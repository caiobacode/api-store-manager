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
    
    afterEach(function () {
      sinon.restore();
    });
  })
  
});