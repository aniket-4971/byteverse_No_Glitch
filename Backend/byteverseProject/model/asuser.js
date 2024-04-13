const mongoose=require("mongoose");
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken");
const keysecret=process.env.JWT_SECRET;
const asUser=new mongoose.Schema({
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
        type:String,
    //     required:true
     },
    phonenumber:{
        type:String,
        // unique:true,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    
},{timestamps:true});
//hashing the password
 asUser.pre('save', async function (next) {
    // If password is not modified then do not hash it
    if (!this.isModified('password')) return next();
  
     this.password = await bcrypt.hash(this.password, 10);
   });
//generating token
 asUser.methods.generateJWTToken = async function () {
    try {
        let token2 = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });

        // this.tokens = this.tokens.concat({ token: token23 });
         await this.save();
        return token2;
    } catch (error) {
        res.status(422).json(error)
    }
}
    // comparePassword: async function (plainPassword) {
    //     return await bcrypt.compare(plainPassword, this.password);
    //   },
      
const users =mongoose.model("users",asUser)
module.exports=users;