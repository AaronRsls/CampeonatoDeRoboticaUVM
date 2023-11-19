var express = require('express');
var router = express.Router();
var inscritosController = require('../controlers/inscritos-c')

/* GET categorias listing. */
router.get('/', async function(req, res, next) {
  res.send(await inscritosController.todos());
});

/* GET categorias listing by id. */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await inscritosController.uno(id));
});

/* POST categorias listing. */
router.post('/', async function(req, res, next) {
    res.send(await inscritosController.crear(req.body));
  //res.send(inscritosController.todos());
});
/* PUT categorias listing. */
router.put('/:id', async function(req, res, next) {
  res.send(await inscritosController.modificar(req.params.id, req.body));
});
/* DELETE categorias listing. */
router.delete('/:id', async function(req, res, next) {
  res.send(await inscritosController.eliminar(req.params.id));
});

module.exports = router;