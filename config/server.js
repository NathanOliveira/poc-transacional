const express = require('express');
const {
    join
} = require('path');

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

require('../app/routes/index')(app);
require('../app/routes/ServiceCell')(app);
require('../app/routes/TransactionAnswer')(app);

module.exports = app;