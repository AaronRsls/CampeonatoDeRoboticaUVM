const database = require("../db/db");

//*********************************************************** */
// Clase para manejar CRUD de Patrocinantes
//********************************************************** */
class patrocinantesController {

    // Metodo encargado de listar Patrocinantes
    async todos (req,res) {
        try{
            const connection = await database.getConnection();
            const arraypatrocinantes = await connection.query("SELECT patrocinantes.id, patrocinantes.nombre, nivel.nivel FROM patrocinantes, nivel WHERE patrocinantes.id_nivel = nivel.id_nivel");
            res.render('patrocinantes',{arraypatrocinantes});
        } catch(error){
            res.redirect('/');
        }
    }
    
    // Metodo encargado de buscar un Patrocinante por id
    async uno(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM patrocinantes WHERE id = ?",req.params.id);
            if (result.length==0){
                res.send("Patrocinante no Existe....");
            }
            const connection2 = await database.getConnection();
            const listanivel = await connection2.query("SELECT * from nivel");
            res.render('editarpatrocinante',{patrocinante:result[0],listanivel});;
        } catch (error) {
            res.send("Error en la consulta.....");
        }    
    }
 
    // Metodo encargado de Generar un listado de niveles de patrocinantes para un select
    async crear(req,res) {
        const connection = await database.getConnection();
        const listanivel = await connection.query("SELECT * from nivel");
        res.render('crearpatrocinante',{listanivel});
    }
    
    // Metodo para insertar un nuevo patrocinante
    async nuevo(req,res) {
            try {
                const connection = await database.getConnection();
                await connection.query("INSERT INTO patrocinantes SET ?", req.body);
                res.redirect('/patrocinantes');
                //return ("Categoria ingresada con exito...");
            } catch (error) {
                res.send("Error en la consulta.....");
            }
    }

    // Metodo para actualizar un Patrocinante
    async modificar(req,res) {
        try {            
            const id=req.params.id;
            const patrocinante=req.body.patrocinante;
            const nivel=req.body.id_nivel;
            const datos = {patrocinante,nivel};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE patrocinantes SET nombre= ? WHERE id = ?", [req.body,id]);
            res.redirect('/patrocinantes');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }

    // Metodo para eliminar un Patrocinante seleccionado
    async eliminar(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM patrocinantes WHERE id = ?", req.params.id);
            if (result.affectedRows==0){
                res.send("Equipo no Encontrado....");
            }
            res.redirect("/patrocinantes");
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }
};

module.exports = new patrocinantesController();