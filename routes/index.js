var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res) {
  res.render('products');
});

module.exports = router;
