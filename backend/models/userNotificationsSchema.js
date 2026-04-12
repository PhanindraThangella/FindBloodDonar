const mongoose=require('mongoose');
const userNotificationsSchema=new mongoose.Schema({
    UserId:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    SenderUserId:{
        type:String,
        required:true,
    },
    SenderEmail:{
        type:String,
        required:true,
    },
    Name:String,
    ContactNumber:String,
    HospitalName:{
        type:String,
        required:true
    },
    Address:String
})

module.exports=mongoose.model('userNotificationsSchema',userNotificationsSchema);
