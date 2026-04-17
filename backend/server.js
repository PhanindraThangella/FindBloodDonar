const express=require('express');
const cors=require('cors');
const nodemailer = require('nodemailer');
const dotenv =require('dotenv');
const userRoutes= require('./routes/userRoutes');
const ConnectDB =require('./models/dbConnect');
const app=express();
dotenv.config();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
try {
  ConnectDB();
} catch (err) {
  console.error('Failed to connect to DB:', err);
}
app.use('/api', userRoutes);
app.listen(port,()=>{
    console.log(`server is runnning at ${port}.`);
})