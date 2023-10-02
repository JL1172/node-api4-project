const express = require("express");
const { authenticator } = require("./login-middleware");
const LoginData = require("./login-model");

const router = express.Router();


router.post("/", authenticator, (req, res) => {
    res.status(200).json({token : req.token, message : "successfully signed in"})
})
router.use((error,req,res,next)=> {
    res.status(error.status || 500).json({
        message : error.message, 
    })
})
module.exports = router;