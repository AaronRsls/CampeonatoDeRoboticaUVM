var express = require('express');
var router = express.Router();
var equiposController = require('../controlers/equipos-c')

/* GET equipos */
router.get('/', async function(req, res, next) {
  res.send(await equiposController.todos());
});

/* GET equipos por id */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await equiposController.uno(id));
});

/* POST equipos */
router.post('/', async function(req, res, next) {
    res.send(await equiposController.crear(req.body));
});

/* PUT equipos */
router.put('/:id', async function(req, res, next) {
  res.send(await equiposController.modificar(req.params.id, req.body.nombre_equipo));
});

/* DELETE equipos */
router.delete('/:id', async function(req, res, next) {
  res.send(await equiposController.eliminar(req.params.id));
});

module.exports = router;
