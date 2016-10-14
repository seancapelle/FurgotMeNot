var models  = require('../models');
var express = require('express');
var router  = express.Router();
var multer = require('multer');


router.get('/', function(req, res) {
  res.render('adopt');
});



module.exports = router;

// router.post('/create', function(req,res) {
// 	console.log('/create hit');
// 	console.log(req.body);
// 	models.Users.findAll({
//     where: {email_address: req.body.email_address}
//   }).then(function(users) {
//   		console.log(users);
//   		console.log('.then');
  		
// 		if (users.length > 0){
// 			console.log(users);
// 			console.log('hit if');
// 			res.send('we already have an email or username for this account')
// 		}else{
// 			console.log('else');
// 			// Solution:
// 			// =========

// 			// Using bcrypt, generate a 10-round salt,
// 			// then use that salt to hash the user's password.
// 			bcrypt.genSalt(10, function(err, salt) {
// 					bcrypt.hash(req.body.password, salt, function(err, hash) {
// 						console.log(req.body.email_address);
// 						// Using the User model, create a new user,
// 						// storing the email they sent and the hash you just made
// 						models.Users.create({
// 							users_name: req.body.users_name,
// 							email_address: req.body.email_address,
// 							password: hash, age: req.body.age,
// 							address: req.body.address,
// 							phone: req.body.phone,
// 							location: req.body.location,
// 							zipcode: req.body.zip
// 						})
// 						// In a .then promise connected to that create method,
// 						// save the user's information to req.session
// 						// as shown in these comments
// 						.then(function(users){


// 							// so what's happening here?
// 							// we enter the user's session by setting properties to req.

// 							// we save the logged in status to the session
// 		          req.session.logged_in = true;
// 		          console.log(req.session.logged_in);
// 		          // the username to the session
// 					req.session.users_name = users.users_name;
// 					console.log(users.users_name);
// 					// the user id to the session
// 		          req.session.users_id = users.id;
// 		          console.log(users.id);
// 		          // and the user's email.
// 		          req.session.users_email = users.email_address;
// 		          console.log (users.email_address);
// 		          // redirect to home on login
// 							res.redirect('/')
// 						});
// 					});
// 			});

// 		}
// 	});
// });



