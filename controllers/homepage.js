var models  = require('../models');
var express = require('express');
var router  = express.Router();

// routing for what do display when you hit the / page

router.get('/', function(req, res) {
  res.render('index');
});

// routing to move you to the new users page

router.get('/new', function(req,res) {
	res.render('newuser');
});

// routing to move you to the donations page

router.get('/donate', function(req,res){
	res.render('donations');
});

// routing to search the database for a dog, cat, ferret ect. 
// this route is in progress aka not fully functional
router.post('/search', function(req,res) {
	console.log(req.body.species);
	models.Genus.findAll({
		where: {species: req.body.species}
	}).then(function(object){
		console.log(object);
		var hbsObject = {result : object[0].dataValues.species}
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});



module.exports = router;
