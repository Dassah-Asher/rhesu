const mongoose = require("mongoose")

const resultsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    
    },
    year:{
      type:Number,
      required:true
    },
    subject:{
        type:String,
        required:true
    },
     classScore:{
         type:Number,
         required:true
     },
     examScore:{
        type:Number,
        required:true
     },
     grade:{
         type:String,
         required:true
     },
     remarks:{
        type:String,
         required:true  
     },
    attendance:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
    teacherRemarks:{
        type:String,
        required:true
    }

});

const Result=mongoose.model("Result",resultsSchema);
module.exports=Result;