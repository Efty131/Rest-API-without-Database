const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Anisul Islam",
        email: "anis@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Bainna",
        email: "bainna@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Fadda",
        email: "fadda@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Bolda",
        email: "bolda@gmail.com"
    },
]

module.exports = users;