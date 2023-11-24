var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();
var authController = require('../controlers/autorizacion-c')

/* GET Iniciar sesion */
router.get('/login', async function(req, res, next) {
    res.render('login',{});
});
  
/* GET Registro usuarios */
router.get('/registro', async function(req, res, next) {
    res.render('registro',{});
});

/* POST Iniciar sesion */
router.post('/login', async function(req, res, next) {
    //res.cookie(token1 = await authController.login(req.body));
    res.cookie('token', await authController.login(req.body), {httpOnly: true});
    res.redirect('/');
});

/* POST Registrar usuario */
router.post('/registro', async function(req, res, next) {
    await authController.registro(req.body);
    res.redirect('/') ;
});

/* GET Cerrar Sesion */
router.get('/logout', (req, res)=>{
    res.clearCookie('token')   
    return res.redirect('/')
} );
  
module.exports = router;
