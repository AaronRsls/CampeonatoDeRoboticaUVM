const database = require("../db/db");

//*********************************************************** */
// Clase para manejar CRUD de Integrantes de los Equipos
//********************************************************** */
class integrantesController {
   
    // Metodo encargado de listar Integrantes
    async todos (req,res) {
        try{
            const connection = await database.getConnection();
            const arrayintegrantes = await connection.query("SELECT integrantes.id_integrante, integrantes.nombre_integrante, equipos.nombre_equipo FROM integrantes, equipos WHERE integrantes.id_equipo = equipos.id_equipo");
            res.render('integrantes',{arrayintegrantes});
        } catch(error){
            res.redirect('/');
        }
    }
    
    // Metodo encargado de buscar Integrante por id
    async uno(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT integrantes.id_integrante, integrantes.nombre_integrante, equipos.id_equipo, equipos.nombre_equipo FROM integrantes, equipos WHERE integrantes.id_equipo = equipos.id_equipo AND integrantes.id_integrante=?",req.params.id);
            if (result.length==0){
                res.send("Categoría no Existe....");
            }
            const connection2 = await database.getConnection();
            const listaequipos = await connection2.query("SELECT * from equipos");
            res.render('editarintegrante',{integrante:result[0],listaequipos});;
        } catch (error) {
            res.send("Error en la consulta.....");
        }    
    }

    // Metodo encargado de Generar un listado de equipos para el select
    async crear(req,res) {
        const connection = await database.getConnection();
        const listaequip = await connection.query("SELECT * from equipos");
        res.render('crearintegrante',{listaequip});
    }

    // Metodo para insertar un nuevo integrante
    async nuevo(req,res) {
            try {
                const connection = await database.getConnection();
                await connection.query("INSERT INTO integrantes SET ?", req.body);
                res.redirect('/integrantes');
            } catch (error) {
                res.send("Error en la consulta.....");
            }
    }
    
    // Metodo para modificar un integrante seleccionado
    async modificar(req,res) {
        try {            
            const id=req.params.id;
            const nombre_integrante=req.body.nombre_integrante;
            const id_equipo=req.body.id_equipo;
            const datos = {nombre_integrante,id_equipo};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE integrantes SET ? WHERE id_integrante = ?", [datos,id]);
            res.redirect('/integrantes');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }
    
    // Metodo para eliminar un Integrante
    async eliminar(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM integrantes WHERE id_integrante = ?", req.params.id);
            if (result.affectedRows==0){
                res.send("Categoría no Encontrada....");
            }
            res.redirect("/integrantes");
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }
};

module.exports = new integrantesController();