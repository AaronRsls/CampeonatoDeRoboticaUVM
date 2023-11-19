var express = require('express');
var router = express.Router();
var categoriasController = require('../controlers/categorias-c')

/* GET Categorias */
router.get('/', async function(req, res, next) {
  res.send(await categoriasController.todos());
});

/* GET categorias por id */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await categoriasController.uno(id));
});

/* POST categorias */
router.post('/', async function(req, res, next) {
    res.send(await categoriasController.crear(req.body));
});
/* PUT categorias */
router.put('/:id', async function(req, res, next) {
  res.send(await categoriasController.modificar(req.params.id, req.body));
});
/* DELETE categorias */
router.delete('/:id', async function(req, res, next) {
  res.send(await categoriasController.eliminar(req.params.id));
});

module.exports = router;
