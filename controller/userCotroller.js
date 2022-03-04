const {User,validateUser} = require('../models/userModel');
const newUser = async (req,res)=>{
try{
    // const {error} = validateUser(req.body)
    // if(error) return res.status(400).send(error.details[0].message)
    const user = new User({
        name: req.body.name,
        email:req.body.email,
        sex:req.body.sex,
        status:req.body.status
    });
await user.save();

res.redirect('/add_user')

}catch(ex){
    res.status(400).send(ex);
}



}
const updateUser = async (req,res)=>{
    try{
        const {error} = validateUser(req.body)
        if(error) return res.status(400).send(error.details[0].message)
        const user = await User.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            email:req.body.email,
            sex:req.body.sex,
            status:req.body.status
        },{
            new:true,
             useFindAndModify: false
        })
        if(!user) return res.status(400).send('Cannot find user by id')
   res.send(user)
 
    }catch(ex){
        res.status(400).send(ex);
    }
}
const deleteUser = async (req,res)=>{
    try{
        const {error} = validateUser(req.body)
        if(error) return res.status(400).send(error.details[0].message)
        const user =await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(400).send('Can not find by id')
        res.status(200).send(user)
        alert('Delete sucessfully!')
    
    }catch(ex){
        res.status(400).send(ex);
    }
}
const getUser = async (req,res)=>{

    try{
        const user =await User.find();
   res.status(200).send(user)
    
    }catch(ex){
        res.status(400).send(ex);
    }
}

module.exports ={
    newUser,
    updateUser,
    deleteUser,
    getUser
}