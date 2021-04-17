const User = require('../models/User');
const path = require('path');

exports.sendMain = (req,res)=>{
  res.sendFile(path.resolve(__dirname + "/../views/index.html"));
}

exports.getAllUsers = (req, res)=>{
	User.findAll({raw:true}).then(users=>{
		res.send(users);
	}).catch(err=>console.log(err));
}

exports.deleteUsers = (req, res)=>{
	const users = req.body;	
	users.forEach(user => {
		User.destroy({
			where: { id: user.id }
		}).then((r) => {
			
		}).catch(err=>console.log(err));
	});
	res.send();
}

exports.blockUsers = (req, res)=>{
	const users = req.body;
	users.forEach(user => {
		User.update(
			{state: "blocked"},
			{where: { id: user.id }}
		).then((r) => {
		}).catch(err=>console.log(err));
	});
	res.send();
}

exports.unblockUsers = (req, res)=>{
	const users = req.body;
	users.forEach(user => {
		User.update(
			{state: "active"}, 
			{where: { id: user.id }}
		).then((r) => {
			//console.log(res);
		}).catch(err=>console.log(err));
	});
	res.send();
}