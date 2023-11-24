var express = require('express');
var router = express.Router();
var categoriasController = require('../controlers/categorias-c');
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET Categorias */
router.get('/', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  //res.send(await categoriasController.todos());
  res.render('categorias',arraycategorias = await categoriasController.todos());
});

/* GET categorias por id */
router.get('/:id', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  let id= req.params.id;
  res.send(await categoriasController.uno(id));
});

/* POST categorias */
router.post('/', verificarPermisos(['Admin']), async function(req, res, next) {
    res.send(await categoriasController.crear(req.body));
});
/* PUT categorias */
router.put('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await categoriasController.modificar(req.params.id, req.body));
});
/* DELETE categorias */
router.delete('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await categoriasController.eliminar(req.params.id));
});

module.exports = router;
