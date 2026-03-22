const mongoose=require('mongoose');
const userTotalDetailsSchema=new mongoose.Schema({
    StudentName:String,
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Gender:String,
    PhoneNumber:Number,
    BloodGroup:String,
    Age:Number,
    Branch:String,
    Section:String,
    RollNo:String,
    City:String,
    Address:String,
})

module.exports=mongoose.model('userTotalDetailsSchema',userTotalDetailsSchema);
