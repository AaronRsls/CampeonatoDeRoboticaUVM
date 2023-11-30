var express = require('express');
var router = express.Router();
var patrocinantesController = require('../controlers/patrocinantes-c')
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), patrocinantesController.todos);
router.get('/editar/:id', verificarPermisos(['Admin','Editor']), patrocinantesController.uno);
router.get('/crear/', verificarPermisos(['Admin','Editor']), patrocinantesController.crear);
router.post('/nuevo/', verificarPermisos(['Admin','Editor']), patrocinantesController.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin','Editor']), patrocinantesController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin','Editor']), patrocinantesController.eliminar);

module.exports = router;