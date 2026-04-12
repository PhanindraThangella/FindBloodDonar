const userNotificationsSchema=require("../models/userNotificationsSchema");
const users=require('../models/userRegScheema');
const sendNotification=async(req,res)=>{
    try{
        const { name, hospitalname, contactnumber, address, receiveremail,receiverUserId  } = req.body;
        const senderId=req.user.userId;
        const userEmail=await users.findOne(
            {UserId:senderId},
            {
                Email:1,
                _id:0
            }
        )
        const response=await userNotificationsSchema.create({
            UserId:receiverUserId,
            Email:receiveremail,
            SenderUserId:senderId,
            SenderEmail:userEmail.Email,
            Name:name,
            HospitalName:hospitalname,
            ContactNumber:contactnumber,
            Address:address
        });
        if(response){
            res.status(200).json({message:"Notification send Successfully."});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:`Failed to sent notification ${error.message}`});
    }
};
const fetchUserNotifications=async(req,res)=>{
    try{
        const notifications=await userNotificationsSchema.find({
            UserId:req.user.userId
        },
        {
            SenderEmail:1,
            Name:1,
            HospitalName:1,
            ContactNumber:1,
            Address:1,
            _id:0
        });
        if(notifications){
            res.status(200).json(notifications);
        }
        else{
            res.status(500).json({message:"No Notifications found for user."});
        }
    }
    catch(error){
        res.status(500).json({message:`Failed to fetch notifications ${error.message}`});
    }
}
module.exports={ sendNotification, fetchUserNotifications };