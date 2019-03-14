const express = require('express')
const app = express()
const port = 4567
const routes = require('./routes');
const middleware = require('./middleware.js');

app.use(middleware.logIncomingToConsole);
app.use('', routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))