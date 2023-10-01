module.exports = {
    async logger(req, res, next) {
        console.log(`
        ---actions---

        METHOD = ${req.method}
        URL = ${req.url}
        TIMESTAMP = ${new Date()}
        
        ---actions---
         `)
         next();
    }
}