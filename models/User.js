const mongoose=require("mongoose");

const increment=require("increment")

const userSchema=mongoose.Schema({
    
   
    
    Firstname:{
        type:"String",
        // required:true 
    },
    Lastname:{
        type:"String",
         
    },
    Age:{
        type:"Number",
        // required:true 
    },
  
    Field:{
        type:"String",
        // required:true 
    }
})


const User = mongoose.model("User",userSchema);
module.exports = User; 