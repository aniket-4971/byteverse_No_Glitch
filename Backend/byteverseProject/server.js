
const app=require("./app");
const connectToDBs= require('./utils/db')
connectToDBs();

app.listen(5000,(error)=>{
    if(error) console.log(err);
    console.log("Hurrahh user!!!, It's working");
})