const mongoose=require("mongoose");
// const validator=require("validator");
// creating schema
const studentschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3 
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present"]
        // validate(value){
            // if(!validator.isEmail(value)){
        //   throw new Error("invalid Email")
            // }  
        // }
    },
    phone:{
        type:Number,
        required:true,
        // min:10,
        unique:true

    },
    address:{
        type:String,
        required:true
    }


})
// creating collection
const Student=new mongoose.model('Student',studentschema);
module.exports=Student;