import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup =async (req,res)=>{
    const {fullName,email,passward} = req.body

    try{
        if(!fullName || !email || !passward){
            return res.status(400).json({message:"All fields are required"})
        }
        if(passward.length <6){
            return res.status(400).json({message:"Passward must be atleast 6 character long"})
        }
        //check if emails vaild: regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({message:"Invalid email format"})
        }

    const user= await User.findOne({
        email:email.toLowerCase()
});
    if(user){
        return res.status(400).json({message:"Email is already registered"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassward = await bcrypt.hash(passward,salt);

    const newUser = new User({
        fullName,
        email:email.toLowerCase(),
        passward:hashedPassward
    });
    if(newUser){
        generateToken(newUser._id,res);
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,
            createdAt:newUser.createdAt,
            updatedAt:newUser.updatedAt,
        });
    }else{
        res.status(500).json({message:"Something went wrong. Please try again later."})
    }
    }catch(error){
        console.log("Error in signup controller",error);
        res.status(500).json({message:"Server Error"});
    }
}