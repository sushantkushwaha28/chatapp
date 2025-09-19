import express from "express";

const router = express.Router();

router.get("/signup",(req,res)=>{
res.send("Sign-up Required")
})

router.get("/login",(req,res)=>{
    res.send("Logged In")
})

router.get("/logout",(req,res)=>{
    res.send("Logout")
})

export default router;