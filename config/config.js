const express = require('express')

const myLogger = require('../middleware/error')
module.exports = function(app){
    app.use(express.json());

    app.use(express.urlencoded({extended:false}));
    
    //set views 
    app.set('view engine','ejs');
    
    //set static file
    
app.use('/',require('../router/userRouter'))
app.use(myLogger)
}
