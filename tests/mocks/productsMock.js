const allProductsResponse = [
  {id:1,name:'Martelo de Thor'},
  {id:2,name:'Traje de encolhimento'},
  {id:3,name:'Escudo do Capitão América'},
];

const thorProduct = { id: 1, name: "Martelo de Thor" };

const newProduct = { name: 'Bolsa da vo' }

const createdProductResponse = { id: 4, name: 'Bolsa da vo' }

const allSalesResponse= [
   { id: 1, date: '2023-01-23T03:02:43.000Z' },
   { id: 2, date: '2023-01-23T03:02:43.000Z' }
]

const allSalesProductsResponse = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
  { sale_id: 2, product_id: 3, quantity: 15 }
]

const insertSaleProductsResponse = [
  {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
  },
 {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}
]


const saleCreateResponse = {
  id: 3,
  itemsSold: [
    {productId:1,quantity:1},
    {productId:2,quantity:5},
  ]
}
const salesServiceResponse = [
  {
    saleId: 1,
    date: '2023-01-23T03:02:43.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: '2023-01-23T03:02:43.000Z',
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: '2023-01-23T03:02:43.000Z',
    productId: 3,
    quantity: 15
  },
]

const oneSaleResponse = [
  {
    date: '2023-01-23T03:02:43.000Z',
    productId: 1,
    quantity: 5
  },
  {
    date: '2023-01-23T03:02:43.000Z',
    productId: 2,
    quantity: 10
  },
]

module.exports = {
  allProductsResponse,
  thorProduct,
  newProduct,
  createdProductResponse,
  saleCreateResponse,
  allSalesProductsResponse,
  allSalesResponse,
  oneSaleResponse,
  insertSaleProductsResponse,
  salesServiceResponse,
};