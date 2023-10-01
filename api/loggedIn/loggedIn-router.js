const express = require("express");
const LoggedInData = require("./loggedIn-model")
const {} = require("./loggedIn-middleware")
const router = express.Router();


router.use((error,req,res,next)=> {
    res.status(error.status || 500).json({
        message  : error.message
    })
})
module.exports = router;