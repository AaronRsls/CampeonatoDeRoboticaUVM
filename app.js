var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var autorizacionRouter = require('./routes/autorizacion');
var usersRouter = require('./routes/users');
var modalidadesRouter = require('./routes/modalidades');
var categoriasRouter = require('./routes/categorias');
var integrantesRouter = require('./routes/integrantes');
var inscritosRouter = require('./routes/inscritos');
var equiposRouter = require('./routes/equipos');
var patrocinantesRouter = require('./routes/patrocinantes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/autorizacion', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/autorizacion',autorizacionRouter);
app.use('/modalidades', modalidadesRouter);
app.use('/categorias', categoriasRouter);
app.use('/integrantes', integrantesRouter);
app.use('/inscritos', inscritosRouter);
app.use('/equipos', equiposRouter);
app.use('/patrocinantes', patrocinantesRouter);
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

module.exports = app;
