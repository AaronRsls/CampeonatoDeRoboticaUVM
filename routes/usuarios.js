var express = require('express');
var router = express.Router();
var usuariosContoller = require('../controlers/users-c')
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), usuariosContoller.todos);
router.get('/editar/:id', verificarPermisos(['Admin']), usuariosContoller.uno);
router.get('/crear/', verificarPermisos(['Admin']), usuariosContoller.crear);
router.post('/nuevo/', verificarPermisos(['Admin']), usuariosContoller.nuevo);
router.post('/modificar/:id', verificarPermisos(['Admin']), usuariosContoller.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin']), usuariosContoller.eliminar);

module.exports = router;
