const express = require("express");
const loginController = require("../controllers/loginController.js");
const loginRouter = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
loginRouter.get("/", loginController.sendLoginForm);
loginRouter.post("/", jsonParser, loginController.authenticateUser);
 
module.exports = loginRouter;