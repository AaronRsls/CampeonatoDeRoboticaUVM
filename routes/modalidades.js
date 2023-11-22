var express = require('express');
var router = express.Router();
var modalidadesController = require('../controlers/modalidades-c')
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET modalidades */
router.get('/', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  res.send(await modalidadesController.todos());
});

/* GET modalidades por id. */
router.get('/:id', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  let id= req.params.id;
  res.send(await modalidadesController.uno(id));
});

/* POST modalidades */
router.post('/', verificarPermisos(['Admin']), async function(req, res, next) {
    res.send(await modalidadesController.crear(req.body));
});

/* PUT modalidades */
router.put('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await modalidadesController.modificar(req.params.id, req.body.nombre_mod));
});

/* DELETE modalidades */
router.delete('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await modalidadesController.eliminar(req.params.id));
});

module.exports = router;
