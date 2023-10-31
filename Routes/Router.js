const express=require('express')
const { userEnquiry } = require('../Controllers/enquiryLogic')

const router=express.Router()

//path for user Enquiry
router.post('/enquiry/user-enquiry', userEnquiry)
module.exports = router