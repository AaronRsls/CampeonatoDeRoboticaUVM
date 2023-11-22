var express = require('express');
var router = express.Router();
var authController = require('../controlers/autorizacion-c')

/* POST Iniciar sesion */
router.post('/login', async function(req, res, next) {
    res.send(await authController.login(req.body));
});

/* POST Registrar usuario */
router.post('/registro', async function(req, res, next) {
    res.send(await authController.registro(req.body));
});
  
module.exports = router;
