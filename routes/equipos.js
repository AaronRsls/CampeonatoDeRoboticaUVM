var express = require('express');
var router = express.Router();
var equiposController = require('../controlers/equipos-c')
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET equipos */
router.get('/', verificarPermisos(['Admin','Editor']),async function(req, res, next) {
  //Para probar con Cliente Rest
  //  res.send(arrayequipos = await equiposController.todos());
  //Para probar desde Vistas (views)
  res.render('equipos',arrayequipos = await equiposController.todos());
});

/* GET equipos por id */
router.get('/:id', verificarPermisos(['Admin','Editor']), async function(req, res, next) {
  let id= req.params.id;
  res.send(await equiposController.uno(id));
});

/* POST equipos */
router.post('/', verificarPermisos(['Admin']), async function(req, res, next) {
    res.send(await equiposController.crear(req.body));
});

/* PUT equipos */
router.put('/:id',  verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await equiposController.modificar(req.params.id, req.body.nombre_equipo));
});

/* DELETE equipos */
router.delete('/:id',  verificarPermisos(['Admin']), async function(req, res, next) {
  res.send(await equiposController.eliminar(req.params.id));
});

module.exports = router;
