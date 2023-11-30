var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Declaraciónn de Rutas 
var indexRouter = require('./routes/index');
var autorizacionRouter = require('./routes/autorizacion');
var usersRouter = require('./routes/usuarios');
var modalidadesRouter = require('./routes/modalidad');
var categoriasRouter = require('./routes/categoria');
var integrantesRouter = require('./routes/integrantes');
var equiposRouter = require('./routes/equipos');
var patrocinantesRouter = require('./routes/patrocinantes');
var inscritosRouter = require('./routes/inscrito');
var nivelesRouter = require('./routes/niveles');

var app = express();

// Inicialización del Motor de Vistas Ejs
app.set('views', path.join(__dirname, 'views/paginas'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Direccionamiento para Ruta Pública
app.use('/autorizacion', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//Control de Rutas 
app.use('/', indexRouter);
app.use('/autorizacion', autorizacionRouter);
app.use('/usuarios', usersRouter);
app.use('/modalidad', modalidadesRouter);
app.use('/categoria', categoriasRouter);
app.use('/integrantes', integrantesRouter);
app.use('/equipos', equiposRouter);
app.use('/patrocinantes', patrocinantesRouter);
app.use('/inscrito', inscritosRouter);
app.use('/niveles',nivelesRouter);

// Manejo de Errores
app.use(function(req, res) {
  res.status(404).redirect('/');
});

module.exports = app;
