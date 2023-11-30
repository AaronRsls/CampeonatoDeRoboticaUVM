var express = require('express');
var router = express.Router();
var nivelesController = require('../controlers/niveles-c');
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), nivelesController.todos);
router.get('/editar/:id', verificarPermisos(['Admin']), nivelesController.uno);
router.get('/crear/', verificarPermisos(['Admin']), nivelesController.crear);
router.post('/nuevo/', verificarPermisos(['Admin']), nivelesController.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin']), nivelesController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin']), nivelesController.eliminar);

module.exports = router;
