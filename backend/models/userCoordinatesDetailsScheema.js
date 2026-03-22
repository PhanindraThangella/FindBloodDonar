const mongoose=require("mongoose");
const userCoordinatesDetailsScheema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    location:{
        type:{type:String,enum:["Point"],required:true},
        coordinates:{type:[Number],required:true}
    },
    createdAt:
    {
        type:Date,
        default:Date.now
    }
});
userCoordinatesDetailsScheema.index({location:"2dsphere"});
module.exports=
mongoose.model("userCoordinates",userCoordinatesDetailsScheema);