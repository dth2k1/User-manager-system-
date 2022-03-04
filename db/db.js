const mongoose = require('mongoose');
const winston = require('winston');

module.exports =function(){
    mongoose.connect(process.env.MONGO_ATLAS,{
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => winston.info('Connected to MongoDB...'))
    .catch(err => winston.error('Could not connect to MongoDB...'));
} 