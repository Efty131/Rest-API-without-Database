// const thakle push kora jabena.tai let use korsi
let users = require("../models/user.models");
const { v4: uuidv4 } = require("uuid");

// get users
const getAllUser = (req,res)=>{
    res.status(200).json({ users });
};
// create users
const createUser = (req,res)=>{
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    };
    users.push(newUser);
    res.status(200).json(users);
};
// update user
const updateUser = (req,res)=>{
// prothome body theke userid ta khuje nicchi pore oi
// sathe match kore username email update korchi
    const userid = req.params.id;
    const {username, email} = req.body;
    users.filter((user) => user.id === userid).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    });
    res.status(200).json(users);
};
// delete user
const deleteUser = (req,res)=>{
    const userId = req.params.id;
   users = users.filter((user) => user.id !== userId)
    res.status(200).json(users);
    };

module.exports = { getAllUser, createUser, updateUser, deleteUser };