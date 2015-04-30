var express = require('express');
var router = express.Router();

/* GET home page. */
function render(template, req, res) {
  if ( req.headers['x-pjax']) {
    res.render(template, {layout: null});
  }
  else {
    res.render(template);
  };

}

router.get('/', function(req, res) {
  console.log(req.headers);
  render('index', req, res); 
});

router.get('/products', function(req, res) {
   render('products', req, res); 
});

module.exports = router;
