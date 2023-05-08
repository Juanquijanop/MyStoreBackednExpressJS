const express = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter')
const categoriesRouter=require('./categoriesRouter')
// const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router()
  app.use('/api/vi',router)

 router.use('/products', productsRouter);
 router.use('/users',usersRouter)
 router.use('/categories',categoriesRouter)
}

module.exports = routerApi;
