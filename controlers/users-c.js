const jwt = require('jsonwebtoken');
const { encriptar} = require("../utilidades/utilidades");
const dotenv = require("dotenv");
dotenv.config();

const secreto = process.env.SECRET
const database = require("../db/db");

//*********************************************************** */
// Clase para manejo del CRUD de Usuarios
//********************************************************** */
class usuariosController {

    // Metodo encargado de listar todos los Usuarios
    async todos(req, res) {
        try {
            const connection = await database.getConnection();
            const arrayusuarios = await connection.query("SELECT * from usersdb");
            res.render('usuarios', { arrayusuarios });
        } catch (error) {
            res.redirect('/');
        }
    }
    
    // Metodo encargado de buscar patrocinante por id
    async uno(req, res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM usersdb WHERE id = ?", req.params.id);
            if (result.length == 0) {
                res.send("usuario no Existe....");
            }
            res.render('editarusuario', { usuario: result[0] });;
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }

    // Metodo encargado de renderizar la vista para el formulario de Crear Usuarios
    async crear(req, res) {
        res.render('crearusuario');
    }

    // Metodo para insertar un nuevo usuario
    async nuevo(req, res) {
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
                res.redirect('/usuarios');
            }
        } catch (error) {
            res.send("Error en la consulta.....");
        }

    }
    
    // Metodo para actualizar una usuario seleccionado
    async modificar(req, res) {
        try {
            const id = req.params.id;
            const usuario = req.body.usuario;
            const password = req.body.password;
            const rol = req.body.rol;
            if (id === undefined || equipo === undefined) {
                res.json("Datos Incompletos.." );
            }
            const datos = { usuario, password, rol };
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE usersdb SET ? WHERE id = ?", [datos, id]);
            res.redirect('/usuarios');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }

    // Metodo para eliminar un usuario seleccionado
    async eliminar(req, res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM usersdb WHERE id = ?", req.params.id);
            if (result.affectedRows == 0) {
                res.send("Usuario no Encontrado....");
            }
            res.redirect('/usuarios');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }
};

module.exports = new usuariosController();