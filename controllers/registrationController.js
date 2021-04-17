const authentication = require("../authentication");
const User = require('../models/User');
const path = require('path');
const bcrypt = require('bcrypt');
require("dotenv").config();

exports.sendRegistrationForm = function (req, res, next) {
  res.sendFile(path.resolve(__dirname + "/../views/registration.html"));
}

exports.registerUser = async function (req, res, next) {
  const { name, email, password } = req.body;
  let foundUser = await User.findOne({where: {email: email}});
  if (foundUser) {
    res.status(403).json({ error: 'Email is already in use'});
  } 
  else {
	  const hashedPassword = bcrypt.hashSync(password, process.env.SALT);
	  console.log(hashedPassword);
	  const today = new Date();
	  const newUser = new User(
		{name: name, 
		email:email, 
		password: hashedPassword, 
		registrationDate: today,
		lastLoginDate: today,
		state: "active",
	  });
	  console.log(newUser);
	  await newUser.save()
	  const token = authentication.generateToken(newUser)
	  res.cookie('token', token, {
			  maxAge: parseInt(process.env.COOKIE_MAX_AGE, 10), 
			  httpOnly: true, 
			  sameSite: true
	  });
	  res.redirect("/");
  }
}