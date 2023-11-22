var express = require('express');
var router = express.Router();
var integrantesController = require('../controlers/integrantes-c')
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET integrantes */
router.get('/', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  res.send(await integrantesController.todos());
});

/* GET integrantes por id */
router.get('/:id', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  let id= req.params.id;
  res.send(await integrantesController.uno(id));
});

/* POST integrantes */
router.post('/', verificarPermisos(['Admin']), async function(req, res, next) {
    res.send(await integrantesController.crear(req.body));
});
/* PUT integrantes */
router.put('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await integrantesController.modificar(req.params.id, req.body));
});
/* DELETE integrantes */
router.delete('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await integrantesController.eliminar(req.params.id));
});

module.exports = router;
