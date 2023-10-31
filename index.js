//import .env file
require('dotenv').config()

//server
const express=require('express')
const cors=require('cors')
 const router=require('./Routes/Router')

const server=express()
server.use(cors())
server.use(express.json())
 server.use(router)
require('./Connection/dbConnection')


const port=4000 || process.env.port
server.listen(port,()=>{
   console.log(`_________server running at port number ${port}_______`);
})