var express = require('express');
var router = express.Router();
var inscritosController = require('../controlers/inscritos-c')
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), inscritosController.todos);
router.get('/editar/:id', verificarPermisos(['Admin']), inscritosController.uno);
router.get('/crear/', verificarPermisos(['Admin']), inscritosController.crear);
router.post('/nuevo/', verificarPermisos(['Admin']), inscritosController.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin']), inscritosController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin']), inscritosController.eliminar);

module.exports = router;