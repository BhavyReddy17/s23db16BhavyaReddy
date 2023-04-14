var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pancakes', { title: 'Search result' });
});

module.exports = router;
var express = require('express');
const pancake_controlers= require('../controllers/pancake');
var router = express.Router();
/* GET pancakes */
router.get('/', pancake_controlers.pancake_view_all_Page );
module.exports = router;