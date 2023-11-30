var express = require('express');
var router = express.Router();
var nivelesController = require('../controlers/niveles-c');
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), nivelesController.todos);
router.get('/editar/:id', verificarPermisos(['Admin','Editor']), nivelesController.uno);
router.get('/crear/', verificarPermisos(['Admin','Editor']), nivelesController.crear);
router.post('/nuevo/', verificarPermisos(['Admin','Editor']), nivelesController.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin','Editor']), nivelesController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin','Editor']), nivelesController.eliminar);

module.exports = router;
