const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName() ,
      price: faker.commerce.price()
    });
  }
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product',
    price: 2000
  });
});


router.post('/',(req,res)=>{
  const body = req.body;

  res.json({
    message:'Created',
    body
  })
})

module.exports = router;










