import jwt from "jsonwebtoken";

export const generateToken = (userId,res)=>{
    userId.generateToken = jwt.sign({id:userId._id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });    res.cookie('token',userId.generateToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:'strict',
        maxAge:30*24*60*60*1000
    })
}