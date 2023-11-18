var express = require('express');
var router = express.Router();
var categoriasController = require('../controlers/categorias-c')

/* GET categorias listing. */
router.get('/', async function(req, res, next) {
  res.send(await categoriasController.todos());
});

/* GET categorias listing by id. */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await categoriasController.uno(id));
});

/* POST categorias listing. */
router.post('/', async function(req, res, next) {
    res.send(await categoriasController.crear(req.body));
  //res.send(categoriasController.todos());
});
/* PUT categorias listing. */
router.put('/:id', async function(req, res, next) {
  res.send(await categoriasController.modificar(req.params.id, req.body));
});
/* DELETE categorias listing. */
router.delete('/:id', async function(req, res, next) {
  res.send(await categoriasController.eliminar(req.params.id));
});

module.exports = router;
