const express = require("express");
const connect = require("./src/config/db");
const userController = require("./src/controllers/user.controller");
const {body} = require("express-validator");
const productController = require("./src/controllers/product.controller")
const {register, login} = require("./src/controllers/auth.controller");
const app = express();

app.use(express.json());
app.use("/user", userController);
app.use("/product", productController);

app.post("/register",
body("name").isString().isLength({min : 5}),
body("email").isEmail(),
body("password").isLength({min : 6})
, register)

app.post("/login", login)
const start = async()=>{
    await connect();
    app.listen(3000, ()=>{
        console.log("Listening on Port 3000");
    })
}
start();