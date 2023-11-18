var express = require('express');
var router = express.Router();
var usuariosController = require('../controlers/users-c')

/* GET users */
router.get('/', async function(req, res, next) {
  res.send(await usuariosController.todos());
});

/* GET users by id. */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await usuariosController.uno(id));
});

/* POST users */
router.post('/', async function(req, res, next) {
  res.send(await usuariosController.crear(req.body))
  //res.send(usuariosController.todos());
});

/* PUT users */
router.put('/:id', async function(req, res, next) {
  res.send(await usuariosController.modificar(req.params.id, req.body.nombre));
});

router.delete('/:id', async function(req, res, next) {
  res.send(await usuariosController.eliminar(req.params.id));
});

module.exports = router;
