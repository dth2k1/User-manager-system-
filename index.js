require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')
const winston = require('winston')
require('./db/db')();
require('./config/config')(app)

app.use(express.static(path.join(__dirname ,'public')))
app.use('/',require('./services/render'));
 
const port=process.env.PORT || 3000; 
app.listen(port,()=>{
    winston.info(`Server is running in ${port}..`)
})