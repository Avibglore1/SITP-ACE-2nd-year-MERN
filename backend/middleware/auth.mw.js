import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(402).json({message: "Header is missing"});
    const token = authHeader.split(" ")[1];
    if(!token) return res.status(402).json({message: "Unauthorized"});
    const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = decodedToken;
    next();
}



