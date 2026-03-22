const jwt = require('jsonwebtoken');

const generateToken =(userId)=>{
    return jwt.sign({id:userID},process.env.JWT_SECRET,{expiresIn:'1h'});
};

module.exports=generateToken;