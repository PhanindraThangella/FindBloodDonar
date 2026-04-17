const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected! ✅");
  } catch (error) {
    console.error("MongoDB Connection Error ❌");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;