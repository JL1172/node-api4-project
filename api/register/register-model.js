const {data,genId} = require("../../userDb/db");

module.exports = {
    async find(username) {
        const found = data.find(n => n.username === username);
        if (found) return false; 
        else return true;
    }, 
    async insert(newUser) {
        const newUserCOmpleted  =  {username : newUser.username,
        password : newUser.password,
        id : genId(),
        } 
        data.push(newUser);
        return newUserCOmpleted;
    }
}