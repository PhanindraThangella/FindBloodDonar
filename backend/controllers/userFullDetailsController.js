const userBloodDetailsSchema = require('../models/userBloodDetailsSchema');
const storeFullDetailsOfUser =async(req,res)=>{
    const {name,email,phonenumber,dob,age,bloodgroup,gender,district,city,houseno,landmark,weight,bloodpressure,bloodsugar,badhabits,generalthings,contest}=req.body;
    const UserExsists= await userBloodDetailsSchema.findOne({Email:email});
    if(UserExsists)
    {
        return res.status(400).json({message:'User Already Exsists'});
    }
    const data= await userBloodDetailsSchema.create({
        UserId:req.user.userId,
        Name:name,
        Email:email,
        PhoneNumber:phonenumber,
        DateOfBirth:dob,
        Age:age,
        BloodGroup:bloodgroup,
        Gender:gender,
        District:district,
        City:city,
        HouseNo:houseno,
        Landmark:landmark,
        Weight:weight,
        BloodPressure:bloodpressure,
        BloodSugar:bloodsugar,
        Badhabits:badhabits,
        Generalthings:generalthings,
        Contest:contest
    });
    if(data)
    {
        res.status(200).json({message:"Successful"});
    }
    else{
        res.status(401).json({message:"Invalid User Data"});
    }
};

module.exports = storeFullDetailsOfUser;