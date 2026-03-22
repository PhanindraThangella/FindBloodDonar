const mongoose=require('mongoose');

require('dotenv').config();
const ConnectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected!.");
    }
    catch{
        console.error("MongoDB Connection Error.")
        process.exit(1);
    }
}

module.exports=ConnectDB;