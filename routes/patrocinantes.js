var express = require('express');
var router = express.Router();
var patrocinantesController = require('../controlers/patrocinantes-c')
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET patrocinantes */
router.get('/', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  //res.send(await patrocinantesController.todos());
  res.render('patrocinantes', arraypatrocinantes =await patrocinantesController.todos());
});

/* GET patrocinantes por id */
router.get('/:id', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  let id= req.params.id;
  res.send(await patrocinantesController.uno(id));
});

/* POST patrocinantes */
router.post('/', verificarPermisos(['Admin']), async function(req, res, next) {
    res.send(await patrocinantesController.crear(req.body));
});

/* PUT patrocinantes */
router.put('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await patrocinantesController.modificar(req.params.id, req.body));
});

/* DELETE patrocinantes */
router.delete('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await patrocinantesController.eliminar(req.params.id));
});

module.exports = router;