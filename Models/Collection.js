const mongoose=require('mongoose')
const enquirySchema=new mongoose.Schema({
    username:{
        type:String,
        trim:true ,//to remove white space
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
       
    },
    service:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    }
})
const  enquires=new mongoose.model('enquires',enquirySchema)
module.exports=enquires