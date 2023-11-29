var express = require('express');
var router = express.Router();
var authController = require('../controlers/autorizacion-c')

router.get('/login/', authController.inicio);
router.post('/login/', authController.login);
router.get('/logout/', authController.logout);
router.get('/registro/', authController.registrar);
router.post('/registro/', authController.registro);

module.exports = router;
