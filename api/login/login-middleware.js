const LoginData = require("./login-model");
const token = process.env.TOKEN;

module.exports = {
    async authenticator(req,res,next) {
        try {
            const {username,password} = req.body;
            if (!username || !password) {
                next({status : 422, message : "username and password required"});
            } else {
                const doesMatch = await LoginData.find(req.body);
                console.log(doesMatch)
                if (!doesMatch) {
                    next({status : 400, message : "username or password is incorrect"});
                } else {
                    req.token = token;
                    next();
                }
            }
        } catch (err) {
            next(err)
        }
    }
}