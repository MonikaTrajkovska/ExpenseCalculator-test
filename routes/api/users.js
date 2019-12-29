const express=require('express')
const config=require('../../config/index.js')
const router =express.Router()
//  const vUsers = require('../validators/users');
//  var validator = require('node-input-validator');
 const User=require('../../models/User')
 const bcrypt=require('bcryptjs')


router.post('/',(req,res)=>{
    const {first_name,last_name,email,date_birth,telephone,country,password}=req.body

    if(!first_name || !last_name || !email || !date_birth || !telephone || !country || !password){
        return res.status(400).json({msg:"Please enter all fields"})
    }
    
    User.findOne({email})
    .then(user=>{
        if(user) return res.status(400).json({msg:'User already exist'})

        const newUser =new User({
            first_name,
            last_name,
            email,
            date_birth,
            telephone,
            country,
            password
        })

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err)throw err
                newUser.password=hash 
                newUser.save()
                .then(user =>{
                    res.json({
                        user:{
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
})







module.exports = router;