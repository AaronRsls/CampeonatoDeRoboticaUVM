var express = require('express');
var router = express.Router();
var modalidadesController = require('../controlers/modalidades-c')

/* GET modalidades listing. */
router.get('/', function(req, res, next) {
  res.send(modalidadesController.todos());
});

/* GET modalidades listing by id. */
router.get('/:id', function(req, res, next) {
  let id= req.params.id;
  res.send(modalidadesController.uno(id));
});

/* POST modalidades listing. */
router.post('/', function(req, res, next) {
    modalidadesController.crear(req.body)
  res.send(modalidadesController.todos());
});

/* PUT modalidades listing. */
router.put('/:id', function(req, res, next) {
  res.send(modalidadesController.modificar(req.params.id, req.body.modalidad));
});

router.delete('/:id', function(req, res, next) {
  res.send(modalidadesController.eliminar(req.params.id));
});

module.exports = router;
