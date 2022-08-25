const { getAllUser, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const router = require("express").Router();

// users route
router.get("/", getAllUser);
router.post("/", createUser);
// user ar theke pawa id r upor base kore update kora hobe
router.put("/:id", updateUser);
// delete user with id
router.delete("/:id", deleteUser);

module.exports = router;