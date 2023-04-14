var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pancakesRouter = require('./routes/pancakes');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var pancakes = require('./models/pancakes');
var resource = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pancakes', pancakesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resource);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on

async function recreateDB(){
// Delete everything
await pancakes.deleteMany();
let instance1 = new pancakes({pancakes_type:"Jelly", size:'Medium',cost:150});
let instance2 = new pancakes({pancakes_type:"Honey", size:'Medium',cost:250});
let instance3 = new pancakes({pancakes_type:"Nutella", size:'Medium',cost:200});
instance1.save().then(doc=>{console.log("First object saved")}).catch(err=>{console.error(err)});
instance2.save().then(doc=>{console.log("Second object saved")}).catch(err=>{console.error(err)});
instance3.save().then(doc=>{console.log("Third object saved")}).catch(err=>{console.error(err)});
}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;
