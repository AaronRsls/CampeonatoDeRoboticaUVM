var express = require('express');
var router = express.Router();
var usuariosController = require('../controlers/users-c')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usuariosController.todos());
});

/* GET users listing by id. */
router.get('/:id', function(req, res, next) {
  let id= req.params.id;
  res.send(usuariosController.uno(id));
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  usuariosController.crear(req.body)
  res.send(usuariosController.todos());
});

/* PUT users listing. */
router.put('/:id', function(req, res, next) {
  res.send(usuariosController.modificar(req.params.id, req.body.nombre));
});

router.delete('/:id', function(req, res, next) {
  res.send(usuariosController.eliminar(req.params.id));
});

module.exports = router;
