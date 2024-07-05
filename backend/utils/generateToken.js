const jwt = require('jsonwebtoken')

//take id from database and return it in the form of encrypted token
const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d',
    });
};

module.exports=generateToken;
