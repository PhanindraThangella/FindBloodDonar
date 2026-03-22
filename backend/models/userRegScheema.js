const mongoose=require('mongoose');
const {nanoid}=require('nanoid');

const UserSchema=new mongoose.Schema({
    UserId:{
        type:String,
        unique:true,
        required:true,
        default:()=>`USER${nanoid(10)}`,
    },
    Name:String,
    Email:{
        required:true,
        type:String,
        unique:true
    },
    Password:{
    type:String,
    required:true
    }
});

module.exports=mongoose.models.User || mongoose.model('User', UserSchema);