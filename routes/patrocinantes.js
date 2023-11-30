var express = require('express');
var router = express.Router();
var patrocinantesController = require('../controlers/patrocinantes-c')
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), patrocinantesController.todos);
router.get('/editar/:id', verificarPermisos(['Admin']), patrocinantesController.uno);
router.get('/crear/', verificarPermisos(['Admin']), patrocinantesController.crear);
router.post('/nuevo/', verificarPermisos(['Admin']), patrocinantesController.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin']), patrocinantesController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin']), patrocinantesController.eliminar);

module.exports = router;