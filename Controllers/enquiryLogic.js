const enquires=require('../Models/Collection')
const userEnquiry=async(req,res)=>{
    //destructure data
    const {username,email,service,message}=req.body
    let enquiry={username,email,service,message}
    try{
        await enquires.create(enquiry).then((result,error)=>{
        
            if(result != "null" && result != ""){
                res.send(result)
            }else
            res.send("error")
        })
    }catch{
        res.send("connection error")
    }
 

}
module.exports={userEnquiry}