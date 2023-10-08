var express = require('express');
var router = express.Router();
var equiposController = require('../controlers/equipos-c')

/* GET equipos listing. */
router.get('/', function(req, res, next) {
  res.send(equiposController.todos());
});

/* GET equipos listing by id. */
router.get('/:id', function(req, res, next) {
  let id= req.params.id;
  res.send(equiposController.uno(id));
});

/* POST equipos listing. */
router.post('/', function(req, res, next) {
    equiposController.crear(req.body)
  res.send(equiposController.todos());
});

/* PUT equipos listing. */
router.put('/:id', function(req, res, next) {
  res.send(equiposController.modificar(req.params.id, req.body.equipo));
});

router.delete('/:id', function(req, res, next) {
  res.send(equiposController.eliminar(req.params.id));
});

module.exports = router;
