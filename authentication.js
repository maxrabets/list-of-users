const jwt = require('jsonwebtoken');
require("dotenv").config();
const User = require('./models/User');

exports.generateToken = user => {
  return jwt.sign({
    id: user.id,
	email: user.email,
  }, process.env.SECRET);
}

exports.checkAuthentication = function (request, response, next){     
    let token = request.cookies.token;
	jwt.verify(token, process.env.SECRET, async (err, decoded) => {
		if(err){
			response.redirect("/login");
			console.log(err);
		}
		else{
			let decoded = jwt.decode(token);
			let foundUser = await User.findOne({where: {id: decoded.id}});
			if(!foundUser) 
				response.redirect("/login");
			else{
				User.update(
					{lastLoginDate: new Date()},
					{where: { id: foundUser.id }}
				);
				if(foundUser.state == "active")
					next();
				else{
					console.log('redirect');
					response.redirect("/login");
				}
			}
		}
	});    
}