import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user_Route from "./routes/user_route.js";
import auth_Route from "./routes/auth_route.js";
import gig_Route from "./routes/gig_route.js";
import order_Route from "./routes/order_route.js";
import conversation_Route from "./routes/conversation_route.js";
import message_Route from "./routes/message_route.js";
import review_Route from "./routes/review_route.js";
import cookieParser from "cookie-parser"
import cors from "cors"




const app = express();
dotenv.config();
mongoose.set('strictQuery',true);

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
         console.log("Connected to db")
    }catch(error){
        console.log(error);
    }
}

app.use(cors({
   origin:"http://127.0.0.1:5173",
    credentials:true
}))
//to send json data from client
app.use(express.json());
//to send cookies from client
app.use(cookieParser());



app.use("/api/auth", auth_Route);
app.use("/api/users", user_Route);
app.use("/api/gigs", gig_Route);
app.use("/api/orders", order_Route);
app.use("/api/conversations", conversation_Route);
app.use("/api/messages", message_Route);
app.use("/api/reviews", review_Route);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
})


app.listen(8800,()=>{
    connect();
    console.log("App is running in 8800")
})