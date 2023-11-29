var express = require('express');
var router = express.Router();
var equiposController = require('../controlers/equipos-c')
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), equiposController.todos);
router.get('/editar/:id', verificarPermisos(['Admin']), equiposController.uno);
router.get('/crear/', verificarPermisos(['Admin','Editor']), equiposController.crear);
router.post('/nuevo/', verificarPermisos(['Admin','Editor']), equiposController.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin']), equiposController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin','Editor']), equiposController.eliminar);

module.exports = router;
