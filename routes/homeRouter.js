const express = require("express");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();
const authentication = require("../authentication");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
 
homeRouter.get("/", authentication.checkAuthentication , homeController.sendMain);
homeRouter.get("/getAllUsers", authentication.checkAuthentication , homeController.getAllUsers);
homeRouter.delete("/deleteUsers", jsonParser, authentication.checkAuthentication , homeController.deleteUsers);
homeRouter.patch("/blockUsers", jsonParser, authentication.checkAuthentication , homeController.blockUsers);
homeRouter.patch("/unblockUsers", jsonParser, authentication.checkAuthentication , homeController.unblockUsers);
 
module.exports = homeRouter;