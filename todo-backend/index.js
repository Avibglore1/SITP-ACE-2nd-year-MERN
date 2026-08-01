import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import Todo from "./models/todo.model.js";
const app = express();

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173",   // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.post("/todo", async(req,res)=>{
    let {todo} = req.body;  
    let task = await Todo.create({todo});
    return res.status(201).json({task});
})

app.get("/todo", async(req,res)=>{
    const todoList = await Todo.find();
    return res.status(200).json({todoList});
})

app.delete("/todo/:x", async(req,res)=>{
    const id = req.params.x;
    let todo = await Todo.findById(id);
    if(!todo) return res.status(402).json({message: "Todo not found"});
    await Todo.findByIdAndDelete(id);
    const finalList = await Todo.find();
    return res.status(200).json({finalList});
})


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDB connection established");
    app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
})
})
.catch((err)=>console.log("Error:", err.message))
