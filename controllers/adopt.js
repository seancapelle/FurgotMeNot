var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.render('adopt');
});

router.post('/adopt/list', function(req, res) 

  {
    res.render('adopt/listed')
  });

module.exports = router;
