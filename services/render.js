////dung de chuyen trang
const axios = require('axios');
const router = require('express').Router();
router.get('/', (req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        
        res.render('index',{
            users:response.data
        })
    }
 
   
    )
    .catch(e=>res.send(e))
})
router.get('/add_user',(req,res)=>{
   res.render('adduser')
})
router.get('/update_user',(req,res)=>{
    axios.get(`http://localhost:3000/api/users`,{params:{id:req.query.id}})
    .then(function(response){
        
        res.render('updateuser',{
            user:response.data
        })
    }
    )
   
    .catch(e=>res.send(e))
})

module.exports = router