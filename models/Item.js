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
        Item.find({purchase_date:-1},(err,items)=>{
            if(err){
                return fail(err)
            }
            return success(items)
        })
    })
}
const save=(items)=>{
    return new Promise((success,fail)=>{
        var i=new Item(items)
        i.save(items,err=>{
            if(err){
                return fail(err)
            }
            return success()
        })
    })
}
const remove = (id) => {
    return new Promise((success, fail) => {
        Item.deleteOne({ _id: id }, err => {  
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

module.exports={
    getAll,
    save,
    remove
}
