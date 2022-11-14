const express = require('express')
const router = express.Router()
const bookingTemplateCopy = require('../models/bookingmodel')

router.post('/book' , (request, response) =>{
    const newbooking=new bookingTemplateCopy({
        firstname:request.body.firstname,
        lastname:request.body.lastname,
        email:request.body.email,
        phone:request.body.phone,
        numberofguests:request.body.numberofguests,
        bookingdate:request.body.bookingdate,
        bookingtime:request.body.bookingtime,
    })
    newbooking.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})
module.exports = router