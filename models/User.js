const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const UserSchema=new Schema({
        
            first_name:{
                type:String,
                require:true,
               
            },
            last_name:{
                type:String,
                require:true},
            email:{
                type:String,
                require:true,
                unique:true
            },
          date_birth:{
                type:Date,
                default:Date.now
            },
           telephone:{
                type:String,
                require:true},
       country:{
                    type:String,
                    require:true},
         password:{
                        type:String,
                        require:true}    
        });

        module.exports = User = mongoose.model('user', UserSchema);

//  const createUser=(data)=>{     return new Promise((success, fail)=>{
//          var user= new User (data)      
//             user.save(err=>{
//              if(err){
//                  return fail(err)
//              }return success()
//          })
//      })
//      }
//  const getUserPasswordByEmail=(email)=>{
//      return new Promise ((success,fail)=>{
//          User.find({email:email},{first_name:1},{last_name:1},{email:1},{date_birth:1},{telephone:1},{country:1},{password:1},(err,data)=>{
//              if(err){
//                  return fail (err)
//              }
//              return success (data [0])
//          })
//      })
//  }
//  module.exports={
//      createUser,
//      getUserPasswordByEmail
    
//  }