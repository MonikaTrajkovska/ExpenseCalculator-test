const express=require('express')

const Item=require('../../models/Item')


const getAll=(req,res)=>{
    Item.getAll()
    .then(items=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

module.exports={
    getAll
}