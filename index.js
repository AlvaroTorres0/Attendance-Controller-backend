//Librerias
const express = require('express');
const {dbConnection} = require('./db/config');
const cors = require('cors');

//Iniciar Express
const app = express();
app.use(cors());
app.use(express.json());

app.use(require('./routes/index_routes'));
app.listen(3000, () => {
    console.log(`Server running in port 3000`);
    dbConnection();
})

module.exports = app;