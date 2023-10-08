var express = require('express');
var router = express.Router();
var categoriasController = require('../controlers/categorias-c')

/* GET categorias listing. */
router.get('/', function(req, res, next) {
  res.send(categoriasController.todos());
});

/* GET categorias listing by id. */
router.get('/:id', function(req, res, next) {
  let id= req.params.id;
  res.send(categoriasController.uno(id));
});

/* POST categorias listing. */
router.post('/', function(req, res, next) {
    categoriasController.crear(req.body)
  res.send(categoriasController.todos());
});
/* PUT categorias listing. */
router.put('/:id', function(req, res, next) {
  res.send(categoriasController.modificar(req.params.id, req.body.nombre));
});
/* DELETE categorias listing. */
router.delete('/:id', function(req, res, next) {
  res.send(categoriasController.eliminar(req.params.id));
});

module.exports = router;
