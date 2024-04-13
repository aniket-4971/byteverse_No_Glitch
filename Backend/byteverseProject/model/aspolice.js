const mongoose=require("mongoose");
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken");
const keysecret=process.env.JWT_SECRET;
const asPolice=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    AadharNo:{
        type:Number,
        // unique:true,
        // required:true
    },
    country:{
        type:String,
        // required:true
    },
    Address:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true
    },
    pincode:{
        type:Number,
        // required:true
    },
    phonenumber:{
        type:Number,
        // unique:true,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    policeid:{
        type:Number,
        // unique:true,
        // required:true
    },
},{timestamps:true});
asPolice.pre('save', async function (next) {
    // If password is not modified then do not hash it
    if (!this.isModified('password')) return next();
  
     this.password = await bcrypt.hash(this.password, 10);
   });


const polices =mongoose.model("polices",asPolice)
module.exports=polices;