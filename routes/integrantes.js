var express = require('express');
var router = express.Router();
var integrantesController = require('../controlers/integrantes-c');
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), integrantesController.todos);
router.get('/editar/:id', verificarPermisos(['Admin','Editor']), integrantesController.uno);
router.get('/crear/', verificarPermisos(['Admin','Editor']), integrantesController.crear);
router.post('/nuevo/', verificarPermisos(['Admin','Editor']), integrantesController.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin','Editor']), integrantesController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin','Editor']), integrantesController.eliminar);

module.exports = router;