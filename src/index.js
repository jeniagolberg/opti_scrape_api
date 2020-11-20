
const express = require('express')
const cors = require('cors');
const routes = require('./api/index')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.options('*',cors())

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

module.exports = app;
