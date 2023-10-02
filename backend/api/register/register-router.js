const express = require("express");
const { validateSchema, validatePostDuplicate } = require("./register-middleware");
const RegisterData = require("./register-model");

const router = express.Router();

router.post("/", validateSchema, validatePostDuplicate, async (req, res, next) => {
    try {
        const newUser = await RegisterData.insert(req.body);
        res.status(201).json({ message: "new user registered", data: newUser })
    } catch (err) {
        next(err);
    }
})
router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message,
        stack: error.stack,
    })
})
module.exports = router;