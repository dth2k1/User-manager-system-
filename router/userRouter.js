
const router = require('express').Router();
const {updateUser,deleteUser,newUser,getUser} = require('../controller/userCotroller')
router.get('/api/users/',getUser)
router.put('/api/users/:id',updateUser);
router.post('/api/users/',newUser);
router.delete('/api/users/:id',deleteUser);



module.exports = router