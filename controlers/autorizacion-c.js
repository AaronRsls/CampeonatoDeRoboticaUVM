const jwt = require('jsonwebtoken');
const database = require("../db/db");
const { encriptar, comparar } = require("../utilidades/utilidades");
const dotenv = require("dotenv");
dotenv.config();

const secreto = process.env.SECRET;
const tiempo = process.env.TIEMPOEXPIRA;

//*********************************************************** */
// Clase para manejo del CRUD de autenticacion de Usuarios
//********************************************************** */
class authController {
    //Metodo para renderizar vista del Login de usuarios
    async inicio(req,res){
        res.render('login');
    }
    //Metodo para renderizar vista del Registro de usuarios
    async registrar(req,res){
        res.render('registro');
    }
    //Login (Inicio de Sesion con Generacion del Token)
    async login(req, res) {
        try {
            const usuario=req.body.usuario;
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM usersdb WHERE usuario = ?", usuario);
            if (result.length === 0) {
                res.json("Usuario No Existe....");
                res.redirec('/');
            }
            else {
                const compara = await comparar(req.body.password, result[0].password);
                if (!compara) {
                    res.json("Password Incorrecto ...");
                }
                else{
                    const token = jwt.sign({ id: result[0].id }, secreto, { expiresIn: tiempo })
                    res.cookie('token', token, {httpOnly: true});
                    res.redirect('/');
                }
            }
        } catch (error) {
            res.json("Error en la consulta.....");
        }
    }

    //Registro de Usuarios Nuevos
    async registro(req, res) {
        try {
            const usuario = req.body.usuario;
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM usersdb WHERE usuario = ?", usuario);
            if (result.length > 0) {
                res.send("Usuario ya Existe....");
            }
            else {
                const password = await encriptar(req.body.password);
                const rol = req.body.rol || 1;
                const datos1 = { usuario, password, rol };
                await connection.query("INSERT INTO usersdb SET ?", datos1);
                res.redirect('/');   
            }
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    } 

    // Cierre de Sesion (Eliminación del Token)
    logout (req, res){
        res.clearCookie('token');
        res.redirect('/');
    } ;

};
module.exports = new authController();