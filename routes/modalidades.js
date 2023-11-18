var express = require('express');
var router = express.Router();
var modalidadesController = require('../controlers/modalidades-c')

/* GET modalidades listing. */
router.get('/', async function(req, res, next) {
  res.send(await modalidadesController.todos());
});

/* GET modalidades listing by id. */
router.get('/:id', async function(req, res, next) {
  let id= req.params.id;
  res.send(await modalidadesController.uno(id));
});

/* POST modalidades listing. */
router.post('/', async function(req, res, next) {
    res.send(await modalidadesController.crear(req.body));
//  res.send(await modalidadesController.todos());
});

/* PUT modalidades listing. */
router.put('/:id', async function(req, res, next) {
  res.send(await modalidadesController.modificar(req.params.id, req.body.nombre_mod));
});

router.delete('/:id', async function(req, res, next) {
  res.send(await modalidadesController.eliminar(req.params.id));
});

module.exports = router;
