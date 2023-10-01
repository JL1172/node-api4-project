const LoggedInData = require("./loggedIn-model")
const token = process.env.TOKEN;
module.exports = {
    async authenticator(req,res,next) {
        const {authorization} = req.headers;
        if (authorization === token) {
            next();
        } else {
            next({status : 403, message : "user must be logged in to see this data"})
        }
    }
}