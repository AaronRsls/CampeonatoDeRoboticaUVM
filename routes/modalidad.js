var express = require('express');
var router = express.Router();
var modalidadesController = require('../controlers/modalidades-c')
var verificarPermisos = require('../middleware/verificarpermisos');

/* GET modalidades */
router.get('/', verificarPermisos(['Admin','Editor']), modalidadesController.todos);

module.exports = router;
