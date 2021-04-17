const authentication = require("../authentication");
const User = require('../models/User');
const path = require('path');
const bcrypt = require('bcrypt');
require("dotenv").config();

function verifyPassword(user, password){
	if(user.password == bcrypt.hashSync(password, process.env.SALT))
		return true;
	return false;
}

exports.sendLoginForm = function (req, res, next) {
  res.sendFile(path.resolve(__dirname + "/../views/login.html"));
}

exports.authenticateUser = async function (req, res, next) {
  console.log("login");
  const { email, password } = req.body;
  let foundUser = await User.findOne({where: {email: email}});
  console.log(foundUser);
  if (!foundUser) {
    res.status(400).send("wrong email or password");
  } 
  else {
	  if(verifyPassword(foundUser, password)){
		  const token = authentication.generateToken(foundUser)
		  res.cookie('token', token, {
			  maxAge: parseInt(process.env.COOKIE_MAX_AGE, 10), 
			  httpOnly: true, 
			  sameSite: true
		  });
		  console.log("ok");
		  res.redirect("/");
	  }
	  else{
		  console.log("wrong password");
		  res.status(400).send("wrong email or password");
	  }
  }
}