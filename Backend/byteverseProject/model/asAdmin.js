const mongoose=require("mongoose");
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken");
const asAdmin=new mongoose.Schema({
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
    judgeid:{
        type:Number,
        // unique:true,
        // required:true
    },
},{timestamps:true});
asAdmin.pre('save', async function (next) {
    // If password is not modified then do not hash it
    if (!this.isModified('password')) return next();
  
     this.password = await bcrypt.hash(this.password, 10);
   });
   const admins =mongoose.model("admin",asAdmin)
//    const adminwarrent =new mongoose.Schema({
    
//     AadharNo:{
//         type:Number,
//         // unique:true,
//         // required:true
//     },
//     Details:{
//         type:String,
//         // required:true
//     }
// })
// const warrent =mongoose.model("warrent",adminwarrent)

module.exports=admins;