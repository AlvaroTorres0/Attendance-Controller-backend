const express = require('express');
const app = express();

app.use(require('./registros/route_registros'));

module.exports = app;