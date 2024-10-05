import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/Rantalwebsite").then(()=>{
    console.log("DB connected Succsess");
}).catch((e)=>{
    console.log(e);
    
})

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
           type:String,
           required:true
    },
    password:{
          type:String,
          required:true
    }
    
})

const user = mongoose.model("Users",schema)
export default user