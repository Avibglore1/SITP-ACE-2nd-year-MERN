import express from "express";

const app = express();

const userAdd = (req,res,next) =>{
    req.user = {
        id: 1,
        role: "admin"
    }
    next()
}

const isStudent = (req,res,next) =>{
    if(req.user.role==="student") next()
    return res.json({message: "Unauthorized"})
}

const isAdmin = (req,res,next) =>{
    if(req.user.role==="admin") next();
    return res.json({message: "Unauthorized person"})
}

app.use("/student", userAdd, isStudent, (req,res)=>{
    res.json({message: "student portal accessed"})
})

app.use("/admin", userAdd, isAdmin, (req,res)=>{
    res.json({status: "success", message: "Admin portal accessible"})
})

app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})