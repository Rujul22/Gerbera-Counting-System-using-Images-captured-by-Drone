//async function - users need name email password picture  req response
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async(req,res) => {
    const {name, email, password, pic}=req.body;

    //user already exist in database or not
    const userExists= await User.findOne({email});
     
    if(userExists){
        res.status(400);
        throw new Error("User Already Exists");
    }
    
    //if user does not exist then create new user in database
    const user= await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token : generateToken(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Error Occured! ");
    }
});

const authUser = asyncHandler(async(req,res) => {
   const {email, password}=req.body;
   
    const user= await User.findOne({ email });
    
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token: generateToken(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid Email or Password!");
    }
});

module.exports = {registerUser,authUser};
// res.json({
    //     name,
    //     email,
    // });
//async function - users need name email password picture  req response
