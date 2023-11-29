var express = require('express');
var router = express.Router();
var modalidadesController = require('../controlers/modalidades-c')
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET modalidades */
router.get('/', verificarPermisos(['Admin','Editor']), modalidadesController.todos);
router.get('/editar/:id', verificarPermisos(['Admin','Editor']), modalidadesController.uno);
router.get('/crear/', verificarPermisos(['Admin','Editor']), modalidadesController.crear);
router.post('/nueva/', verificarPermisos(['Admin']), modalidadesController.nueva);
router.post('/modificar/:id', verificarPermisos(['Admin','Editor']), modalidadesController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin']), modalidadesController.eliminar);

module.exports = router;
