import mongoose from "mongoose";
import express from "express";
import User from "./models/user.model.js";
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mongoose")
.then(()=>console.log("Connected to mongodb"))
.catch(err=>console.log("Connection Err:", err))

app.post("/users", async(req,res)=>{
    const data = req.body;
    await User.create(data);
    res.json({data})
})

// get all users:
app.get("/users", async(req,res)=>{
    const users = await User.find();
    res.status(200).json({users});
})

// get a user:
app.get("/users/:id", async(req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    if(!user) return res.status(404).json({message: "User not found"});
    return res.status(200).json({user});
})

// update a user:
app.patch("/users/:id", async(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const user = await User.findByIdAndUpdate(id,data);
    return res.status(200).json({user,message: "success"});
})

// delete a user:

app.delete("/users/:id", async(req,res)=>{
    const id = req.params.id;
   const user =  await User.findByIdAndDelete(id);
    return res.status(200).json({user,message: "Data deleted"});
})

app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})