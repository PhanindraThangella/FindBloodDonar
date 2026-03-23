const User = require('../models/userRegScheema');
const userBloodDetailsSchema = require('../models/userBloodDetailsSchema');
// const userTotalDetailsSchema = require('../models/userTotalDetailsSchema');
const userCoordinatesDetailsSchema = require('../models/userCoordinatesDetailsSchema');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');
const getUser=async(req,res)=>{
    const user=req.user.userId;
    const results= await userBloodDetailsSchema.findOne({UserId:user});
    res.json(results);
};
const getUsers=async(req,res)=>{
  const group=req.query.group;
   const userId = req.user.userId;
    // ✅ Step 1: Get current user's location
    const currentUser = await userCoordinatesDetailsSchema.findOne({ userId });
    if (!currentUser) {
      return res.status(404).json({ error: "User location not found" });
    }
    const [lng, lat] = currentUser.location.coordinates;
    const nearbyUsers = await userCoordinatesDetailsSchema.find({
      userId: { $ne: userId }, // exclude self
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
          $maxDistance: 5000, // 5 km
        },
      },
    }).select("userId");
   const nearbyUserIds = nearbyUsers.map(u => u.userId);
  const result = await userBloodDetailsSchema.find(
    {
      BloodGroup: group,
      UserId: { $in: nearbyUserIds }
    },
    {
      Name: 1,
      Age: 1,
      BloodGroup: 1,
      City: 1,
      Gender: 1,
      _id: 0
    }
  );
  res.json(result);
}
const storeUser=async(req,res)=>{
  try{
      const {name,email,newPassword,conformPassword}=req.body;
      const userExists = await User.findOne({ Email:email });
      if (userExists) {
        return res.status(409).json({ message: 'User already exists' });
      }
      const salt= await bcrypt.genSalt(12);
      const hashPass=await bcrypt.hash(newPassword,salt);
      const user = await User.create({
        Name: name, 
        Email: email,
        Password: hashPass,
      });

      if(user)
      {
        res.status(200).json({message:"User Registration Succesful."});
      }
  }
  catch(error){
    res.status(500).json({ error: 'Internal server error' });
  }
};
const getAccess=async(req,res)=>{
  try{
  const {email,password}=req.body;
  const user= await User.findOne({Email:email});
  if(!user)
  {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const isMatch=await bcrypt.compare(password,user.Password);
  if(!isMatch)
  {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign(
      { userId: user.UserId,
        userName:user.Name
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user:{
        id:user.UserId,
        name:user.Name
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
const updateProfile=async(req,res)=>{
  console.log("reached");
  try{
    const update=await userBloodDetailsSchema.updateOne(
      {Email:req.body.Email},
      {
        $set:{
          Name:req.body.Name,
          PhoneNumber:req.body.PhoneNumber,
          Gender:req.body.Gender,
          Age:req.body.Age,
          HouseNo:req.body.HouseNo,
          Landmark:req.body.Landmark
        }
      }
    )
    if(update)
    {
      return res.status(200).json({ message: "Profile updated successfully" });
    }
  }
  catch(error)
  {
    res.status(400).json({message:"Update Failed."});
  }
}
module.exports = { getUser, storeUser, getAccess, updateProfile, getUsers  };