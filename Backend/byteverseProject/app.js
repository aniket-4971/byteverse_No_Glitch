const express=require("express");
const cookieParser=require("cookie-parser");
const userroute=require('./router/userroute');
const adminroute=require('./router/adminroute')
const policeroute=require('./router/policeroute')
const cors=require("cors");
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(bodyParser.json());
app.use('/police',policeroute)
app.use('/admin',adminroute);
app.use('/user',userroute);
// 
app.get("/", (req, res) => {
    res.send("Nice working");
  });
  module.exports=app;