const express = require('express');
const ProductServices= require('./../services/productServices')

const router = express.Router();
const service = new ProductServices();

router.get('/', (req, res) => {
  const products = service.findAll();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findById(id)
  res.json(product);
});


router.post('/',(req,res)=>{
  const body = req.body;
  const newProducts=service.save(body);

  res.status(201).json(newProducts)
})


router.put('/:id',(req,res)=>{
  const {id} = req.params
  const body = req.body;

  res.json({
    message:'Updated',
    data:body,
    id,
  })
})

module.exports = router;










