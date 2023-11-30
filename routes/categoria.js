var express = require('express');
var router = express.Router();
var categoriasController = require('../controlers/categorias-c');
var verificarPermisos = require('../middleware/verificarpermisos');

router.get('/', verificarPermisos(['Admin','Editor']), categoriasController.todos);
router.get('/editar/:id', verificarPermisos(['Admin']), categoriasController.uno);
router.get('/crear/', verificarPermisos(['Admin']), categoriasController.crear);
router.post('/nueva/', verificarPermisos(['Admin']), categoriasController.nueva);
router.post('/modificar/:id', verificarPermisos(['Admin']), categoriasController.modificar);
router.get('/eliminar/:id', verificarPermisos(['Admin']), categoriasController.eliminar);

module.exports = router;