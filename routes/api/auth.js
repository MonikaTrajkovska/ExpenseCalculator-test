const express=require('express')
//  const config=require('../../config/index.js')
const router =express.Router()
//  const vUsers = require('../validators/users');
//  var validator = require('node-input-validator');
 const User=require('../../models/User')
 const bcrypt=require('bcryptjs')
 const config =require('config')
 const jwt =require('jsonwebtoken')
 const auth =require('../../middleware/auth')



router.post('/',(req,res)=>{
    const {email,password}=req.body

    if( !email ||  !password){
        return res.status(400).json({msg:"Please enter all fields"})
    }
    
    User.findOne({email})
    .then(user=>{
        if(!user) return res.status(400).json({msg:'User  does not  exist'})

        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            if(!isMatch) return res.status(400).json({msg:'Invalid credentials'})

            jwt.sign(
                {id:user.id},
                config.get('jwtSecret'),
                {expiresIn:3600},
                (err,token)=>{
                    if(err) throw err
                    res.json({
                        user:{
                            token,
                            id:user.id,
                            first_name:user.first_name,
                            last_name:user.last_name,
                            email:user.email,
                            date_birth:user.date_birth,
                            telephone:user.telephone,
                            country:user.country,
                            // password:user.password  
                }
            
           

        
        })
    })
        })
})
})


router.get('/user',auth,(req,res)=>{
    User.findById(req.user.id)
    .select('-password')
    .then(user=>res.json(user))
})




module.exports = router;