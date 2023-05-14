const express = require('express')
const CategoryServices = require('./../services/categoryServices')

const router = express.Router()
const service = new CategoryServices();

router.get('/', (req,res)=>{
  const categories = service.findAll();
  res.json(categories)
})


router.get('/:id',(req,res)=>{
  const {id} = req.params
  res.json({
    id:id,
    name:'Laptos',
    brand:'Hp'
  })
})


router.post('/',(req,res)=>{
  const body = req.body;

  res.status(201).json({
    message:'Created',
    body
  })
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


module.exports = router
