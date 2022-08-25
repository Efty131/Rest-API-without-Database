const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./routes/users.route");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users",userRouter);

// home route
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});
// route not found error
app.use((req,res,next) => {
    res.status(404).json({message: "Route not found"})
});
// server error
app.use((req,res,next) => {
    res.status(500).json({message: "Something broke"})
});

module.exports = app;