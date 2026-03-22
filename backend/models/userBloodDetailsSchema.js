const mongoose=require('mongoose');
const userBloodDetailsSchema=new mongoose.Schema({
    UserId:{
        type:String,
        required:true,
        unique:true
    },
    Name:String,
    Email:{
        type:String,
        required:true,
        unique:true
    },
    PhoneNumber:String,
    DateOfBirth:String,
    Age:String,
    BloodGroup:String,
    Gender:String,
    District:String,
    City:String,
    HouseNo:String,
    Landmark:String,
    BloodDonated:{
        type:Number,
        default:0
    },
    BloodReceived:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model('userBloodDetailsSchema',userBloodDetailsSchema);
