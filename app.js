const express = require('express');
const sequelize = require("./sequelize");
const app = express();
const cookieParser = require('cookie-parser')
const registrationRouter = require("./routes/registrationRouter.js");
const loginRouter = require("./routes/loginRouter.js");
const homeRouter = require("./routes/homeRouter.js");
require("dotenv").config();

app.use(express.static(__dirname + "/public"));

app.use("/registration", registrationRouter);;
app.use("/login", loginRouter);
app.use("/", homeRouter);
app.use(cookieParser("secret"));

sequelize.sync({force: false}).then(result=>{
  console.log("OK");
  app.listen(process.env.PORT,()=>{
  console.log('Server is up and running at the port ' + process.env.PORT)
  })
}).catch(err=> console.log(err));