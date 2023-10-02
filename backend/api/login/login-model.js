const {data, genId} = require("../../userDb/db");

module.exports = {
    async find(credentials) {
        const {password, username} = credentials;
        let decider = data.findIndex(item => item.password === password);
        console.log(decider)
        if (decider !== -1) {
            let secondDecider = data.at(decider);
            return secondDecider.username === username ? true : false; 
        }  else {
            return false;
        }
    }
}