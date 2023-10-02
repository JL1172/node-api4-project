const data = require("../../userDb/info");

module.exports = {
    async findAll() {
        return data;
    }
}