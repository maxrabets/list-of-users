const express = require('express');
const sequelize = require("./sequelize");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser("secret"));
const registrationRouter = require("./routes/registrationRouter.js");
const loginRouter = require("./routes/loginRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.use(express.static(__dirname + "/public"));

app.use("/registration", registrationRouter);;
app.use("/login", loginRouter);
app.use("/", homeRouter);

sequelize.sync({force: false}).then(result=>{
  console.log("OK");
  app.listen(3000,()=>{
  console.log('Server is up and running at the port 3000')
  })
}).catch(err=> console.log(err));