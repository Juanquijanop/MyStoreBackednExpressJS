const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes')
const {logErrors, errorHandler} = require('./middlewares')
app.use(express.json())
routerApi(app)


app.use(logErrors);
app.use(errorHandler);


app.listen(port)
