var pancake = require('../models/pancakes');
// Handle a show one view with id specified by query
exports.pancake_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await pancake.findById( req.query.id)
res.render('pancakedetail',
{ title: 'pancake Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for creating a pancake.
// No body, no in path parameter, no query.
// Does not need to be async
exports.pancake_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('pancakecreate', { title: 'pancake Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a pancake.
// query provides the id
exports.pancake_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await pancake.findById(req.query.id)
    res.render('pancakeupdate', { title: 'pancake Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.pancake_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await pancake.findById(req.query.id)
    res.render('pancakedelete', { title: 'pancake Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };