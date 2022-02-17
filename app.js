const express = require("express");
const connect = require("./src/config/db");
const userController = require("./src/controllers/user.controller");
const {register, login} = require("./src/controllers/auth.controller");
const app = express();

app.use(express.json());
app.use("/user", userController);
app.post("/register", register)
app.post("/login", login)
const start = async()=>{
    await connect();
    app.listen(3000, ()=>{
        console.log("Listening on Port 3000");
    })
}
start();