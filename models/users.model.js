const mongoose=require('mongoose')
// Schema
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String,required:true},
    active:{type:Boolean,required:true},
    followers:Number
})
// model
const User=mongoose.model("User",UserSchema,'users')
module.exports=User