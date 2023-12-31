var express = require('express');
var router = express.Router();
var patrocinantesController = require('../controlers/patrocinantes-c')

/* GET patrocinantes */
router.get('/', async function(req, res, next) {
  res.send(await patrocinantesController.todos());
});

/* GET patrocinantes por id */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await patrocinantesController.uno(id));
});

/* POST patrocinantes */
router.post('/', async function(req, res, next) {
    res.send(await patrocinantesController.crear(req.body));
});

/* PUT patrocinantes */
router.put('/:id', async function(req, res, next) {
  res.send(await patrocinantesController.modificar(req.params.id, req.body));
});

/* DELETE patrocinantes */
router.delete('/:id', async function(req, res, next) {
  res.send(await patrocinantesController.eliminar(req.params.id));
});

module.exports = router;
