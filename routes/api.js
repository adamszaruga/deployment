var express = require('express');
var router = express.Router();
var models = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status: "ok"});
});

router.get('/comments', function(req, res, next) {
  models.Comment.findAll().then((data)=>{
  	res.json(data);
  });
});

router.post('/comments', function(req, res, next) {
  let {text} = req.body;
  models.Comment.create({text})
  	.then(comment => res.json(comment));
});

module.exports = router;
