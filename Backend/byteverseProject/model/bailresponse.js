const mongoose=require("mongoose");
const adminbail =new mongoose.Schema({
    
        AadharNo:{
            type:Number,
            // unique:true,
            // required:true
        },
        status:{
            type:String,
            // required:true
        }
    })
    const bail =mongoose.model("bail",adminbail)
    module.exports=bail;