const url = 'mongodb://127.0.0.1:27017/AttendanceController';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dbConnection = async() => {
    mongoose.connect(url, { useNewUrlParser: true })
        .then(() => {
            console.log('Connection succesfully =D')
        });
}

module.exports = {
    dbConnection
}