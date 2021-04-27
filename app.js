require('dotenv').config()

const app = require('./config/server');

var port = process.env.PORT || 3081;

app.listen(port, function () {
    console.log(`Server runing on ${port}`);
});