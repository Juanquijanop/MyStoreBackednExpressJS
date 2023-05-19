const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes')
const { logsErrors, errorHandler } = require('./middlewares/errorHandler'); // Update the path to match your file location
app.use(express.json())
routerApi(app)


app.use(logsErrors);
app.use(errorHandler);

app.listen(port)
