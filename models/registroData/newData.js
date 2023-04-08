const {Schema,model} = require('mongoose');

const dataSchema = Schema({
    edificio : {type:String},
    hora : {type:String},
    fecha : {type:String},
    data : {type:Array}
});

module.exports = model('data', dataSchema);