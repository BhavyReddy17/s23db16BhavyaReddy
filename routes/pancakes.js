
var express = require('express');
const pancake_controlers= require('../controllers/controllers');
var display_controller = require('../controllers/display');

var router = express.Router();
/* GET pancakes */
router.get('/', pancake_controlers.pancake_view_all_Page );
/* GET detail pancake page */
router.get('/detail', display_controller.pancake_view_one_Page);
/* GET create pancake page */
router.get('/create', display_controller.pancake_create_Page);
/* GET create update page */
router.get('/update', display_controller.pancake_update_Page);
/* GET delete pancake page */
router.get('/delete', display_controller.pancake_delete_Page);
module.exports = router;