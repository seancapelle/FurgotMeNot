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

// route to the list pets page
router.get('/listpet', function(req,res){
	res.render('listpet');
});

// post a new pet to the pets table
router.post('/postpet', function (req, res) {
  
  models.Pets.create({
    age: req.body.age,
    pets_name: req.body.pets_name,
    genus: req.body.genus,
    breed: req.body.breed_name,
    shots: req.body.shots,
    fixed: req.body.fixed,
    kid_friendly: req.body.kid_friendly,
    cat_friendly: req.body.cat_friendly,
    dog_friendly: req.body.dog_friendly,
    food_aggressive: req.body.food_aggressive,
    house_trained: req.body.house_trained,
    user_id: req.session.user_id
  })

  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});


// routing to search the database for a dog, cat, ferret ect. 
// this route is in progress aka not fully functional
router.post('/search', function(req,res) {
	console.log(req.body.genus);
	models.Pets.findAll({
		where: {genus: req.body.genus}
	}).then(function(object){
		console.log(object);
		var hbsObject = {result : object}
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});



module.exports = router;
