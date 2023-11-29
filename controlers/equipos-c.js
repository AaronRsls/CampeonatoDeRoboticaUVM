const database = require("../db/db");

//*********************************************************** */
// Clase para manejo del CRUD de Equipos
//********************************************************** */
class equiposController {
    // Metodo encargado de listar Equipos
    async todos (req,res) {
        try{
            const connection = await database.getConnection();
            const arrayequipos = await connection.query("SELECT * from equipos");
            res.render('equipos',{arrayequipos});
        } catch(error){
            res.redirect('/');
        }
    }

    // Metodo encargado de buscar Equipo por id
    async uno(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM equipos WHERE id_equipo = ?",req.params.id);
            if (result.length==0){
                res.json("Equipo no Existe....");
            }
            res.render('editarequipo',{equipo:result[0]});;
        } catch (error) {
            res.json("Error en la consulta.....");
        }    
    }
    
    // Metodo de renderizar la vista para el formulario de Crear un Equipo
    async crear(req,res) {
        res.render('crearequipo');
    }

    // Metodo para insertar un nuevo Equipo
    async nuevo(req,res) {
            try {
                const connection = await database.getConnection();
                await connection.query("INSERT INTO equipos SET ?", req.body);
                res.redirect('/equipos');
            } catch (error) {
                res.send("Error en la consulta.....");
            }
    }
    
    // Metodo para actualizar una equipos seleccionado
    async modificar(req,res) {
        try {            
            const id=req.params.id;
            const equipo=req.body.nombre_equipo;
            if (id === undefined || equipo === undefined) {
                res.json("Datos Incompletos.." );
            }
            const datos = {equipo};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE equipos SET nombre_equipo= ? WHERE id_equipo = ?", [equipo,id]);
            res.redirect('/equipos');
        } catch (error) {
            res.json("Error en la consulta.....");
        }
    }

    // Metodo para eliminar un equipo seleccionads
    async eliminar(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM equipos WHERE id_equipo = ?", req.params.id);
            if (result.affectedRows==0){
                res.json("Equipo no Encontrado....");
            }
            res.redirect('/equipos');
        } catch (error) {
            res.json("Error en la consulta.....");
        }
    }
};

module.exports = new equiposController();