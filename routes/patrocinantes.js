var express = require('express');
var router = express.Router();
var patrocinantesController = require('../controlers/patrocinantes-c')

/* GET patrocinantes listing. */
router.get('/', function(req, res, next) {
  res.send(patrocinantesController.todos());
});

/* GET patrocinantes listing by id. */
router.get('/:id', function(req, res, next) {
  let id= req.params.id;
  res.send(patrocinantesController.uno(id));
});

/* POST patrocinantes listing. */
router.post('/', function(req, res, next) {
    patrocinantesController.crear(req.body)
  res.send(patrocinantesController.todos());
});

/* PUT patrocinantes listing. */
router.put('/:id', function(req, res, next) {
  res.send(patrocinantesController.modificar(req.params.id, req.body.patrocinante));
});

router.delete('/:id', function(req, res, next) {
  res.send(patrocinantesController.eliminar(req.params.id));
});

module.exports = router;
