var express = require('express');
var router = express.Router();
var categoriasController = require('../controlers/categorias-c');
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), categoriasController.todos);
router.get('/editar/:id', verificarPermisos(['Admin','Editor']), categoriasController.uno);
router.get('/crear/', verificarPermisos(['Admin','Editor']), categoriasController.crear);
router.post('/nueva/', verificarPermisos(['Admin','Editor']), categoriasController.nueva);
router.post('/modificar/:id', verificarPermisos(['Admin','Editor']), categoriasController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin','Editor']), categoriasController.eliminar);

module.exports = router;