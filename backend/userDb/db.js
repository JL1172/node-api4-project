let id = 0;

const genId = () => {
    return Date.now() + id++ 
}

const data = [
    {username : "jacob11", password : "jacob?", id : genId()},
]


module.exports = {
    genId,
    data,
}