var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pancake_controller = require('../controllers/controllers');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// pancake ROUTES ///
// POST request for creating a pancake.
router.post('/pancakes', pancake_controller.pancake_create_post);
// DELETE request to delete pancake.
router.delete('/pancakes/:id', pancake_controller.pancake_delete);
// PUT request to update pancake.
router.put('/pancakes/:id', pancake_controller.pancake_update_put);
// GET request for one pancake.
router.get('/pancakes/:id', pancake_controller.pancake_detail);
// GET request for list of all pancake items.
router.get('/pancakes', pancake_controller.pancake_list);
router.get('/', pancake_controller.pancake_view_all_Page );
module.exports = router;

// API for our resources

