var express = require('express');
var router = express.Router();
var inscritosController = require('../controlers/inscritos-c')

/* GET inscritos */
router.get('/', async function(req, res, next) {
  res.send(await inscritosController.todos());
});

/* GET inscritos por id */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await inscritosController.uno(id));
});

/* POST inscritos */
router.post('/', async function(req, res, next) {
    res.send(await inscritosController.crear(req.body));
});
/* PUT inscritos */
router.put('/:id', async function(req, res, next) {
  res.send(await inscritosController.modificar(req.params.id, req.body));
});
/* DELETE inscritos */
router.delete('/:id', async function(req, res, next) {
  res.send(await inscritosController.eliminar(req.params.id));
});

module.exports = router;