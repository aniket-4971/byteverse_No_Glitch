
const mongoose=require("mongoose");
const adminwarrent =new mongoose.Schema({
    
        AadharNo:{
            type:Number,
            // unique:true,
            // required:true
        },
        details:{
            type:String,
            // required:true
        }
    })
    const warrent =mongoose.model("warrent",adminwarrent)
    module.exports=warrent;