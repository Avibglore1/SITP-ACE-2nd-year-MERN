import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();
const corsOptions = {
origin: ['http://localhost:5173'],
methods: 'GET,POST',
credentials: true,
};

app.use(cors(corsOptions));


app.get("/sum/:a/:b", (req,res)=>{
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    let result = a+b;
    res.status(200).json({message:"sum calculated", sum: result})
})

mongoose.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log("MongoDB connected");
    app.listen(3000,()=>{
    console.log("Server is listening at 3000")
})
})
.catch((err)=>console.log("Error:", err))
