const winston = require('winston');
const logger = winston.createLogger({
    transports: [
       
        new winston.transports.Http(),
        new winston.transports.File({ filename: 'wirte.log' }),
      ],
})
const myLogger= function(req,res,next){
    logger.log({
        level:'info',
        message:'Log everything'
    })
    next();
}

module.exports = myLogger;