var express = require('express');
var router = express.Router();
var integrantesController = require('../controlers/integrantes-c')

/* GET integrantes */
router.get('/', async function(req, res, next) {
  res.send(await integrantesController.todos());
});

/* GET integrantes por id */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await integrantesController.uno(id));
});

/* POST integrantes */
router.post('/', async function(req, res, next) {
    res.send(await integrantesController.crear(req.body));
});
/* PUT integrantes */
router.put('/:id', async function(req, res, next) {
  res.send(await integrantesController.modificar(req.params.id, req.body));
});
/* DELETE integrantes */
router.delete('/:id', async function(req, res, next) {
  res.send(await integrantesController.eliminar(req.params.id));
});

module.exports = router;
