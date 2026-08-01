import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/user.routes.js";
import bookRoutes from "./routes/book.routes.js"
import cors from "cors";

import express from "express";
import mongoose from "mongoose";


const app = express();
app.use(cors());

app.use(express.json()); //built in middleware

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDB connected");
    app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})
})
.catch(err=>console.log("Error:", err.message));



