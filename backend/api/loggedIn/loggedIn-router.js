const express = require("express");
const LoggedInData = require("./loggedIn-model")
const {authenticator} = require("./loggedIn-middleware")
const router = express.Router();

router.get("/",authenticator,async(req,res,next)=> {
    try {
        const data = await LoggedInData.findAll();
        res.status(200).json(data); 
    } catch(err) {next(err)}
})

router.use((error,req,res,next)=> {
    res.status(error.status || 500).json({
        message  : error.message
    })
})
module.exports = router;