const mongoose = require('mongoose');
const validator = require('validator');
const joi = require('joi');

const UserSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true,
        default:'male'
    },
    status:{
        type:String,
       required:true
    }
})
const User  = mongoose.model('User',UserSchema)
function validateUser(user){
    const schema = joi.object({
       
        name:joi.string().min(3).required().trim(),
        email:joi.string().email({tlds: { allow: ['com', 'net'] }}).min(3).max(30).lowercase(),
        sex:joi.string(),
        status:joi.string()
    })
    return schema.validate(user)
}
module.exports={
   User,
   validateUser
}