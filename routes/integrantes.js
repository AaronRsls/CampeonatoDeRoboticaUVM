var express = require('express');
var router = express.Router();
var integrantesController = require('../controlers/integrantes-c')

/* GET categorias listing. */
router.get('/', async function(req, res, next) {
  res.send(await integrantesController.todos());
});

/* GET categorias listing by id. */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await integrantesController.uno(id));
});

/* POST categorias listing. */
router.post('/', async function(req, res, next) {
    res.send(await integrantesController.crear(req.body));
  //res.send(integrantesControllers.todos());
});
/* PUT categorias listing. */
router.put('/:id', async function(req, res, next) {
  res.send(await integrantesController.modificar(req.params.id, req.body));
});
/* DELETE categorias listing. */
router.delete('/:id', async function(req, res, next) {
  res.send(await integrantesController.eliminar(req.params.id));
});

module.exports = router;
