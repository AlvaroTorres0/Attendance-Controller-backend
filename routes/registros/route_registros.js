const {Router} = require('express');
const app = Router();
const {dbConnection} = require('../../db/config');
const modelData = require('../../models/registroData/newData');

app.post('/registro', (req,res) =>{
    let body = req.body;

    let registroData = new modelData({
        edificio: body.edificio,
        hora: body.hora,
        fecha : body.fecha,
        data : body.data
    });

    registroData.save();
    res.status(200).json({
        ok: true,
        registroData,
        message: "Registro Exitoso"
    });
});

module.exports = app;