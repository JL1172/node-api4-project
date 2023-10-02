const RegisterData = require("./register-model");

module.exports = {
    async validateSchema(req,res,next) {
        try {
            const {username,password} = req.body;
            if (!username || !password) {
                next({status : 422, message : "need username and password"})
            } 
            if (!(/^[A-Za-z0-9]*$/.test(username)) || !(/[^A-Za-z0-9]+$/.test(password))) {
                next({status  : 422, message : "username must only be numbers and letters and password must include special character"})
            } else {
                next();
            }
        } catch(err) {
            
        }
    },
    async validatePostDuplicate(req,res,next){
        try {
            const {username,password} = req.body;
            const validation = await RegisterData.find(username);
            if (!validation) {
                next({status : 400, message : "account already exists"});
            } else {
                next(); 
            }
        } catch (err) {next(err)}
    }
}