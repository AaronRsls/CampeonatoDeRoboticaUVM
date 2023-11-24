var express = require('express');
var router = express.Router();
var inscritosController = require('../controlers/inscritos-c')
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET inscritos */
router.get('/', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  //res.send(await inscritosController.todos());
  res.render('inscritos', arrayinscritos= await inscritosController.todos());
});

/* GET inscritos por id */
router.get('/:id', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  let id= req.params.id;
  res.send(await inscritosController.uno(id));
});

/* POST inscritos */
router.post('/', verificarPermisos(['Admin']), async function(req, res, next) {
    res.send(await inscritosController.crear(req.body));
});
/* PUT inscritos */
router.put('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await inscritosController.modificar(req.params.id, req.body));
});
/* DELETE inscritos */
router.delete('/:id', verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await inscritosController.eliminar(req.params.id));
});

module.exports = router;