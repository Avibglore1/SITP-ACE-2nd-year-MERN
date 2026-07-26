import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
import { authMiddleware } from "./middleware/auth.mw.js";

app.use(express.json());

function generateToken(user){
    const accessToken = jwt.sign({userId:user._id},process.env.ACCESS_SECRET, {expiresIn: "15m" });
    const refreshToken = jwt.sign({userId: user._id}, process.env.REFRESH_SECRET, {expiresIn: "15m"});
    return {accessToken, refreshToken}
}

app.post("/signup", async(req,res)=>{
    try {
        const {email,password,name} = req.body;
        let user = await User.findOne({email});
        if(user) return res.status(409).json({message:"User already registered"});
        const hashedPassword = await bcrypt.hash(password,10);
        user = await User.create({email,password: hashedPassword,name});
        return res.status(201).json({user});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong", Error: error.message})
    }   
})

app.post("/login", async(req,res)=>{
    try {
        const {email,password} = req.body;
        let user = await User.findOne({email});
        if(!user) return res.status(401).json({message: "Unauthorized entry"});
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(401).json({message: "email or password is incorrect"});
        const {accessToken, refreshToken}=generateToken(user);
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 //7days
        })
        return res.status(200).json({token: accessToken})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong", Error: error.message})
    }
})

app.get("/profile", authMiddleware, (req,res)=>{
    return res.status(200).json({message:"u r allowed to visit all subpages",decodedToken: req.user})
})




mongoose.connect(process.env.MONGO_URI)
.then(()=>
    {
      console.log("Mongodb connected");
        app.listen(3000, ()=>{
     console.log("Server is listenening at port 3000");
})
    })
.catch(err=>console.log("Error", err));


