const express = require("express");
const registrationController = require("../controllers/registrationController.js");
const registrationRouter = express.Router();
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
registrationRouter.get("/", registrationController.sendRegistrationForm);
registrationRouter.post("/", urlencodedParser, registrationController.registerUser);
 
module.exports = registrationRouter;