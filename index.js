const express=require("express");

const app=express();
const womenController=require(".//src/controllers/women.controllers");
const menController=require(".//src/controllers/men.controller");
const registerController=require(".//src/controllers/register.controller");

const connect=require(".//src/configs/db")
app.listen(4700,async()=>{
    try {
        await connect();
        console.log("listening on port 4700")
    } catch (error) {
        console.log({message:error.message})
    }
})




const cors=require("cors");
app.use(cors());

 app.use(express.json());

 app.use("/women",womenController)
 app.use("/men",menController)
 app.use("/register",registerController)

 module.exports=app;