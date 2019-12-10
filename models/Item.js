const mongoose=require('mongoose')
const Item=mongoose.model(
    'item',
    new mongoose.Schema(
        {
            product_name:{
                type:String,
                require:true},
            product_type:{
                type:String,
                require:true},
            product_description:{
                type:String,
                require:true},
            purchase_date:{
                type:Date,
                default:Date.now
            },
            product_price:{
                type:String,
                require:true}
        },
        {
            collection: 'items'
        })
);

const getAll = ()=>{
    return new Promise((success,fail)=>{
        Item.find({},(err,items)=>{
            if(err){
                return fail(err)
            }
            return success(items)
        })
    })
}

module.exports={
    getAll
}
