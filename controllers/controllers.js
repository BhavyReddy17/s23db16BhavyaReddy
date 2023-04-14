
var pancake = require('../models/pancakes');
// List of all pancakes
exports.pancake_list = async function(req, res) {
    try{
    thepancakes = await pancake.find();
    res.send(thepancakes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific pancake.
exports.pancake_detail = function(req, res) {
res.send('NOT IMPLEMENTED: pancake detail: ' + req.params.id);
};
// Handle pancake create on POST.
exports.pancake_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: pancake create POST');
};
// Handle pancake delete form on DELETE.
exports.pancake_delete = function(req, res) {
res.send('NOT IMPLEMENTED: pancake delete DELETE ' + req.params.id);
};
// Handle pancake update form on PUT.
exports.pancake_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: pancake update PUT' + req.params.id);
};
/ VIEWS
// Handle a show all view
exports.pancake_view_all_Page = async function(req, res) {
try{
theCostumes = await Costume.find();
res.render('pancakes', { title: 'Costume Search Results', results: theCostumes });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};