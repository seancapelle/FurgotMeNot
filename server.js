// Dependencies
// ============np
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser'); // for working with cookies
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override'); // for deletes in express
var debug = require('debug')('express-example');
var models = require("./models");
var multer = require('multer');

// Our model controllers (rather than routes)
var homepage_controller = require('./controllers/homepage');
var adopt_controller = require('./controllers/adopt');
var login_controller = require('./controllers/login');

// Express settings
// ================

// instantiate our app
var app = express();

// express use app multer
// set params for multer
app.use(multer({
    dest: './',
    limits: {
        fieldNameSize: 50,
        files: 5,
        fields: 3,
        fileSize: (1024 * 1024) * 100
    },
    //gives a unique file name
    rename: function(fieldname, filename) {
        return filename;
    },
    //gives a console.log for uploading
    onFileUploadStart: function(file) {
        console.log('Starting file upload process.');
        if (file.mimetype !== 'text/img') {
            return false;
        }
    },
    inMemory: true
}).any());

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))

//allow sessions
app.use(session({
    secret: 'app',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homepage_controller);
app.use('/adopt', adopt_controller);
app.use('/login', login_controller);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.post('/image_one', function(req, res){
  console.log(req.files);
  models.Pets.update(
  {
    image_one: req.files
  },
  {
    where: { id : '1' }
  })
 .then(function(result){ 
    console.log('/image hit');
    res.redirect('/listpet');
  })
  });
    // var file = req.file.path

  // for the length of files write to database

  // models.images.create({

  // })




// error handler
// no stacktraces leaked to user unless in development environment
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: (app.get('env') === 'development') ? err : {}
//   });
// });


//set port
app.set('port', process.env.PORT || 8080);

// we sync the models with our db
// (thus creating the apropos tables)
models.sequelize.sync().then(function () {
  // set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
    // then save a log of the listening to our debugger.
    debug('Express server listening on port ' + server.address().port);
  });
});

console.log('listening on port 8080');

module.exports = app;
