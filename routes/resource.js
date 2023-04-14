var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pancake_controller = require('../controllers/controllers');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/pancakes', pancake_controller.pancake_create_post);
// DELETE request to delete Costume.
router.delete('/pancakes/:id', pancake_controller.pancake_delete);
// PUT request to update Costume.
router.put('/pancakes/:id', pancake_controller.pancake_update_put);
// GET request for one Costume.
router.get('/pancakes/:id', pancake_controller.pancake_detail);
// GET request for list of all Costume items.
router.get('/pancakes', pancake_controller.pancake_list);
module.exports = router;
// API for our resources

